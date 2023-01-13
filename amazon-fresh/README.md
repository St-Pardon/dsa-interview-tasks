# Amazon Fresh Task
Amazon Fresh is a grocery delivery service that offers consumers the option of purchasing their groceries online and having them delivered on schedule. The Amazon Fresh team is planning a route for a delivery truck to deliver customer orders in the city of Techlandia. The planner will create a delivery area for each order to effectively plan the route.The area is abstracted as a grid. Not all locations are accessible by road. The truck only needs to make a single delivery in each area.

## Requirement
Write an algorithm to determine the minimum distance required for the truck to deliver the order.

> The input to the function/method consists of one argument: area, representing the two dimensional grid of integers.

### Assumptions:
- Some places in the delivery area cannot be accessed by the driver, as there are no roads in those locations.
- The delivery area can be represented as a two-dimensional grid of integers, where each integer represents one cell.
- The truck must start from the top-left corner of the area, which is always accessible and can move one cell up, down, left, or right at a time.
- The accessible areas are represented by 1, areas without roads are represented by 0, and the order destination is represented by 9.

### Input:
The input to the function/method consists of one argument: area, representing the two dimensional grid of integers.

### Output:
Return an integer representing the total distance traversed to deliver the order else return -1.

### Example:
**Input:**
```
area = [[1, 0, 0], [1, 0, 0], [1, 9, 1]]
``` 
**Output:**
```
3
```
**Explanation:**
Starting from the top-left corner, the truck traverses the cells `(0, 0) -> (1, 0) -> (2, 0) -> (2, 1).`
The truck traverses a total distance of `3` to deliver the order.