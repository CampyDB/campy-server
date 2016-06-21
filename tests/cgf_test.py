from app.api.resources.cgf import get_newick_tree, MATRIX_DB_PATH, read_binary_cgf_matrix
import os
import numpy

def test_cgf():
    assert os.path.exists(MATRIX_DB_PATH)
    matrix = read_binary_cgf_matrix(MATRIX_DB_PATH)
    assert isinstance(matrix, numpy.ndarray)
    newick_tree = get_newick_tree(matrix)
    assert "genomes" in newick_tree.keys()
    assert "tree" in newick_tree.keys()

