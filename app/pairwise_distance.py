import numpy as np
from parakeet import jit

__author__ = 'piotr'


@jit
def similarity_count_matrix(X, X_nan):
    """
    Compute similarity count matrix with potential NaN values.

    Notes:
        Parakeet JIT is used to speed-up computation ~10X

    Args:
        X_nan (numpy.array): boolean array of NaN elements within X array
        X (numpy.array): array with dtype np.int64, np.float64, etc

    Returns:
        numpy.array: array of pairwise similarity counts
    """
    nrow, ncol = X.shape
    m = np.zeros((nrow, nrow))
    for i in xrange(0, nrow - 1):
        for j in xrange(i + 1, nrow):
            count = 0
            for k in xrange(0, ncol):
                if not X_nan[i, k] and not X_nan[j, k] and X[i, k] == X[j, k]:
                    count += 1
            m[i, j] = count
            m[j, i] = count
    return m


@jit
def pairwise_not_nan_counts(X):
    """
    Compute the pairwise number of columns between rows that contain no
    NaN/missing values from boolean matrix of values that are NaN.

    Notes:
        Parakeet JIT is used to speed-up computations.

    Args:
        X (numpy.array): boolean 2D matrix from np.isnan(X)

    Returns:
        numpy.array: 2D matrix of pairwise counts of columns that do not contain NaN.
    """
    nrow, ncol = X.shape
    m = np.zeros((nrow, nrow))
    for i in xrange(0, nrow - 1):
        for j in xrange(i + 1, nrow):
            count = 0
            for k in xrange(0, ncol):
                if not X[i, k] and not X[j, k]:
                    count += 1
            m[i, j] = count
            m[j, i] = count
    return m


def dist_matrix_with_nan(X):
    """
    Compute distance matrix of the pairwise percent dissimilarity of wgMLST
    profiles that may contain NaNs/missing values.
    A wgMLST profiles pairwise similarity count matrix divided by a
    matrix of the pairwise number of not NaN/missing values.

    Notes:
        Parakeet JIT compiler is used to speed-up helper functions that produce
        intermediate matrices.

    Args:
        X (numpy.array): array of numbers with Numpy dtype (e.g. np.int64, np.float64, etc)

    Returns:
        numpy.array: Pairwise distance matrix
    """
    X_nan = np.isnan(X)
    dm = (1 - (similarity_count_matrix(X, X_nan) / pairwise_not_nan_counts(X_nan)))
    np.fill_diagonal(dm, 0)
    dm_isnan = np.isnan(dm)
    dm[dm_isnan] = 1.0
    return dm