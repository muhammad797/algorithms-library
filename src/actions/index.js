export const selectAlgorithm = (algorithmId) => {
    return {
        type: "select_algorithm",
        payload: algorithmId,
    };
};