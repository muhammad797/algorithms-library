let data = [
    {
        id: "1",
        title: "Bubble Sort",
        description: "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements \"bubble\" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort.[2] Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position."
    },
    {
        id: "2",
        title: "Quick Sort",
        description: "Quick sort is a comparison sort, meaning that it can sort items of any type for which a \"less-than\" relation (formally, a total order) is defined. In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved. Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting. It is very similar to selection sort, except that it does not always choose worst-case partition."
    },
    {
        id: "3",
        title: "Counting Sort",
        description: "Counting sort is an algorithm for sorting a collection of objects according to keys that are small integers; that is, it is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence. Its running time is linear in the number of items and the difference between the maximum and minimum key values, so it is only suitable for direct use in situations where the variation in keys is not significantly greater than the number of items. However, it is often used as a subroutine in another sorting algorithm, radix sort, that can handle larger keys more efficiently."
    },
    {
        id: "4",
        title: "Merge Sort",
        description: "Merge sort is a sorting algorithm. Conceptually, a merge sort works as follows:\n" +
        "1. Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).\n" +
        "2. Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list."
    }
];

export default () => data;