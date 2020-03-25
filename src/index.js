// You should implement your task here.

module.exports = function towelSort(matrix) {
    return (
        (matrix &&
            matrix.flatMap((item, index) => {
                if (index % 2) {
                    return item.reverse();
                } else {
                    return item;
                }
            })) ||
        []
    );
};
