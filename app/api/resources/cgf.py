#!/usr/bin/python
# -*- coding: utf-8 -*-
from scipy.spatial.distance import pdist, cdist
import numpy as np
from fastcluster import linkage
from scipy.cluster.hierarchy import to_tree
import pandas as pd
from collections import defaultdict
import re
from flask_restful import Resource, reqparse


def complete_linkage(dm):
    """
    Perform complete linkage hierarchical clustering on a distance matrix.

    Args:
        dm (numpy.array): Distance matrix

    Returns:
        (object): fastcluster complete linkage hierarchical clustering object
    """

    return linkage(dm, 'complete')


def to_newick(tree, leaf_names):
    """Newick tree output string from SciPy hierarchical clustering tree

    Convert a SciPy ClusterNode tree to a Newick format string.
    Use scipy.cluster.hierarchy.to_tree on a hierarchical clustering linkage matrix to create the root ClusterNode for the `tree` input of this function.

    Args:
        tree (scipy.cluster.hierarchy.ClusterNode): Output of scipy.cluster.hierarchy.to_tree from hierarchical clustering linkage matrix
        leaf_names (list of string): Leaf node names

    Returns:
        (string): Newick output string
    """

    newick_list = _scipy_tree_to_newick_list(tree, [], tree.dist,
            leaf_names)
    return ''.join(newick_list[::-1])


def _scipy_tree_to_newick_list(
    node,
    newick,
    parentdist,
    leaf_names,
    ):
    """List of Newick tree output string from SciPy hierarchical clustering tree

    This is a recursive function to help build a Newick output string from a scipy.cluster.hierarchy.to_tree input with
    user specified leaf node names in `leaf_names`.

    Notes:
        This function is meant to be used with `to_newick`

    Args:
        node (scipy.cluster.hierarchy.ClusterNode): Root node is output of scipy.cluster.hierarchy.to_tree from hierarchical clustering linkage matrix
        parentdist (float): Distance of parent node of `node`
        newick (list of string): Newick string output accumulator list which needs to be reversed and concatenated (i.e. `''.join(newick)`) for final output
        leaf_names (list of string): Leaf node names

    Returns:
        (list of string): Returns `newick` list of Newick output strings
    """

    if node.is_leaf():
        newick.append('%s:%.2f' % (leaf_names[node.id], parentdist
                      - node.dist))
        return newick
    else:
        if len(newick) > 0:
            newick.append('):%.2f' % (parentdist - node.dist))
        else:
            newick.append(');')
        newick = _scipy_tree_to_newick_list(node.get_left(), newick,
                node.dist, leaf_names)
        newick.append(',')
        newick = _scipy_tree_to_newick_list(node.get_right(), newick,
                node.dist, leaf_names)
        newick.append('(')
        return newick


def get_newick_tree(fps):
    """
    Construct a complete linkage hierarchical clustering tree for some specified Genomes_ and return
    the Newick string for that tree along with a list of the list of Genomes_ at each leaf node.

    Args:
        genomes (list): List of Genome_ names

    Notes:
        cgMLST_330 profiles are expected to stay static after initial analysis of a Genome_ so the profiles, trees, distance matrices, etc derived from the cgMLST results can be cached essentially forever.

    Returns:
        dict['tree']: Newick string of collapsed tree of specified `genomes`
        dict['genomes']: 2D list of genomes grouped based on 100% cgMLST profile similarity
    """

    (dm, gs_collapse) = get_distance(fps)
    Z = complete_linkage(dm)
    T = to_tree(Z, False)
    names = []

    nwk_str = to_newick(T, [names for names in gs_collapse])
    rtn_obj = {'tree': nwk_str, 'genomes': gs_collapse}
    return rtn_obj


def read_binary_cgf_matrix(filename):
    """Gets numpy array of pandas dataframe
    
    Args:
        filename: Path to csv file
    
    Returns:
        np.array(df): Numpy array of dataframe. 
    """

    df = pd.read_csv(filename, index_col=0)

    # np.array of CGF profiles, rownames, column names

    return np.array(df)


def get_distance(fps):
    """Compute Hamming distance for CGF profiles
    
    Args:
        fps (????): Something with the data we need
    
    Returns:
        (np.array, list of list of str): 
    """

    pair = {}
    collapse = {}
    arr = []
    profiles = []

    for row in fps:
        name = re.sub(r'\W', '_', row[0])
        isolate_name = str(row[0])
        cgf_profile = str(row[1])
        pair[name] = cgf_profile

    collapse = defaultdict(list)
    for (isolate_name, cgf_profile) in pair.iteritems():
        if cgf_profile not in collapse:
            arr.append(map(int, cgf_profile))
            profiles.append(cgf_profile)
        collapse[cgf_profile].append(isolate_name)
    dm = pdist(arr, metric='hamming')
    return (dm, [collapse[x] for x in profiles])


class CgfNewickTreeAPI(Resource):

    def get(self):
        fps = \
            read_binary_cgf_matrix('/home/student/cgf/campy-server/app/api/resources/cgf.csv')
        rtn_obj = get_newick_tree(fps)
        return rtn_obj


