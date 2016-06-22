__author__ = 'piotr'

import numpy as np
from app.pairwise_distance import dist_matrix_with_nan, pairwise_not_nan_counts, similarity_count_matrix


def test_pairwise_distance_with_nan():
    arr = np.array([[1, 2, 3, 4, 1],
                    [1, 3, 1, 4, 1],
                    [1, 2, 3, 4, 1],
                    [2, 3, np.nan, 4, 1]])
    assert arr.shape == (4, 5)
    sim_counts = similarity_count_matrix(arr, np.isnan(arr))

    expected_sim_counts = np.array([[0, 3, 5, 2],
                                    [3, 0, 3, 3],
                                    [5, 3, 0, 2],
                                    [2, 3, 2, 0]])
    assert np.array_equal(sim_counts, expected_sim_counts)

    not_nan = pairwise_not_nan_counts(np.isnan(arr))
    expected_nan_counts = np.array([[0, 5, 5, 4],
                                    [5, 0, 5, 4],
                                    [5, 5, 0, 4],
                                    [4, 4, 4, 0]])
    assert np.all(not_nan == expected_nan_counts)

    dm = dist_matrix_with_nan(arr)
    expected_dm = np.array([[0.0, 0.4, 0.0, 0.5],
                            [0.4, 0.0, 0.4, 0.25],
                            [0.0, 0.4, 0.0, 0.5],
                            [0.5, 0.25, 0.5, 0.0]])
    assert np.allclose(dm, expected_dm)


def test_pairwise_distance_with_all_nan():
    """
    If an item has all missing values then it should have a maximum distance
    of 1.0 to all other items including other items with missing values.
    """
    arr = np.array([[1, 2, 3, 4, 1],
                    [1, 3, 1, 4, 1],
                    [1, 2, np.nan, 4, 1],
                    [np.nan, np.nan, np.nan, np.nan, np.nan]])
    assert arr.shape == (4, 5)
    sim_counts = similarity_count_matrix(arr, np.isnan(arr))

    expected_sim_counts = np.array([[0, 3, 4, 0],
                                    [3, 0, 3, 0],
                                    [4, 3, 0, 0],
                                    [0, 0, 0, 0]])
    assert np.array_equal(sim_counts, expected_sim_counts)

    not_nan = pairwise_not_nan_counts(np.isnan(arr))
    expected_nan_counts = np.array([[0, 5, 4, 0],
                                    [5, 0, 4, 0],
                                    [4, 4, 0, 0],
                                    [0, 0, 0, 0]])
    assert np.all(not_nan == expected_nan_counts)

    dm = dist_matrix_with_nan(arr)
    expected_dm = np.array([[0.0, 0.4, 0.0, 1.0],
                            [0.4, 0.0, 0.25, 1.0],
                            [0.0, 0.25, 0.0, 1.0],
                            [1.0, 1.0, 1.0, 0.0]])
    assert np.allclose(dm, expected_dm)
