### Storybook deployment (on Chromatic): https://63a3049cb1928499cc672345-xfboaabidw.chromatic.com/?path=/story/example-demo--basic
### NPM page: https://www.npmjs.com/package/toast-hollwowvessell-library

## Installation:
- npm
```shell
$ npm i toast-hollwowvessell-library
```


## How to use


### Usage
   ```
    function app() {
        const { showInfoToast } = useToast();
        const handleClick = () => {
            const options = {
                heading: "Hello",
                message: "Lorem ipsum...",
                duration: 3000,
                inAnimationName: "left-slide-in",
                outAnimationName: "left-slide-out",
                animationTime: 1000,
                color: "purple",
                closeIconColor: "white",
            };

            showInfoToast(options);
        };
        return (
            <>
                <ToastContainer />
                <button onClick={handleClick}>Click me!</button>
            </>
        );
    } 
```
```
    Options
      heading - heading text
      message - message text
      duration - duration of showing toast on the screen in ms,
      inAnimationName - animation when toast is appearing on the screen,
      outAnimationName - animation when toast is appearing from the screen,
      animationTime - duration of animation in ms,
      color - color of toast,
      closeIconColor - color of close icon,
```
    Animation names:
        In animations:
            appearance
            left-slide-in
            right-slide-in
            top-slide-in
            bottom-slide-in
        Out animations
            disappearance 
            left-slide-out 
            right-slide-out 
            top-slide-out 
            bottom-slide-out
```
    Colors:
        purple
        green
        red
        yellow
```
    Close icon color:
        white
        black
