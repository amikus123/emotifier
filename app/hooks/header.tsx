import { useEffect } from "react";

const useHeaderOutsideClick = (
  ref: React.MutableRefObject<any>,
  toggle: React.Dispatch<React.SetStateAction<boolean>>,
  state:boolean,
  ignoredClass?: string
) => {
  useEffect(() => {
    function handleClickOutside(event) {
      let first = false;
      let second = false;
      const target = event.target;
      console.log(target)
      try {
        if (target.firstChild) {
          first = target.firstChild.classList.contains(ignoredClass);
        }
      } catch (e) {
        console.error(e);
      }
      try {
        if (target.partentElement) {
          second = target.partentElement.classList.contains(ignoredClass);
        }
      } catch (e) {
        console.error(e);
      }

      if (
        ref.current &&
         state &&
        !ref.current.contains(event.target) &&
        !(event.target.classList.contains(ignoredClass) || first || second)
      ) {
        console.log("You clicked outside of me!");
        toggle(false);
      }else{
        console.log("failed")
      }
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, toggle,state, ignoredClass]);
};
export default useHeaderOutsideClick