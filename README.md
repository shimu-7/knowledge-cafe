# Course Registration

**3 project features**
---
1. Students can view course details and purchase the course of their choice.
2. If one selects a course more than once, a notification will be displayed that this course has been selected.
3.  No one can buy more than 20 credits at a time.
---
**How state is handled in my assignment project is discussed below**
---
At first, I make fake data for my assignment in json format. Then to load this data I use useEffect hook. I use useState hook to update/manage price,credit and selected courses. A function handleCredit is used to pass parameter(selected course) from the  child component to the parent component.

