import {useRef, useCallback} from 'react';

export function useGrandTotalRef(length, mobile) {
    const ref = useRef(null)

    const setRef = useCallback(node => {

      if(ref.current) {
        ref.current = null;
      }

      if(node && length > 1) {
        node.style.alignItems = mobile ? 'center' : 'flex-end';
        node.style.paddingBottom = mobile ? '0px' : '41px';
      }
      
      ref.current = node;

    })
    
    return [setRef];
  }


export function useAllItemsRef(length , mobile) {
    const ref = useRef(null);
    const setRef = useCallback(node => {

      if(ref.current)
        ref.current = null;

      if(node && length == 1){
          node.style.border = '0px';
          node.style.padding = '0px';
          node.style.margin = '0px';
      }

      ref.current = node;
    })
    return [setRef];
}