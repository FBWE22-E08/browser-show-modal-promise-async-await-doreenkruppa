# Promise - Async Await

**Preparation:**

- install the dependencies by typing this command in the terminal: npm i
- use the command: 'npm run serve' to run the project.

**Instructions**

like the previous exercise but using the async await syntax:
- Create a promise that, once resolved, displays a modal to the user after the user spends 60 seconds on the page.
- The modal already exists in index.html but is currently hidden.
- Only work in index.js
- Note: no need to use the reject option since we only need the resolve function for this exercise.

**BONUS - 1:** 

- The user should be able to close the modal somehow.

**BONUS - 2:** 

- In the `style.css` there is an animation on the "Continue" button on the page. Create a promise which executes code upon the button's animation end. **You must use the `async await` syntax.**
- Upon the animation end, display an alert saying "Continue to subscribe", and change the background color of the button.
- Hint: use the events: "mouseover" and "animationend"

![On animation end](images/animationend.png)