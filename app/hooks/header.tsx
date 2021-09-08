import { useEffect } from "react";

const useHeaderOutsideClick = (
  ref: React.MutableRefObject<any>,
  toggle: React.Dispatch<React.SetStateAction<boolean>>,
  state: boolean,
  ignoredClass?: string
) => {
  useEffect(() => {
    function handleClickOutside(event) {
      let first = false;
      let second = false;
      const target = event.target;
      try {
        if (target.firstChild) {
          first = target.firstChild.classList.contains(ignoredClass);
        }
      } catch (e) {
        console.error(e);
      }
      try {
        if (target.parentElement) {
          second = target.parentElement.classList.contains(ignoredClass);
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
        setTimeout(() => {
          toggle(false);
        }, 1);
      } else {
      }
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, toggle, state, ignoredClass]);
};
export default useHeaderOutsideClick;
