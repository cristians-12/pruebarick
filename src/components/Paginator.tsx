import { nextPage, prevPage } from "@/redux/features/pageSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { InfoResponse } from "@/types/api/response";
import React from "react";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Paginator: React.FC<{
  props: InfoResponse;
  onPrevious: () => void;
  onNext: () => void;
}> = ({ props, onPrevious, onNext }) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((page) => page.pageReducer.value);

  return (
    <div className="flex gap-10 items-center mt-10 justify-center">
      <div>
        {props.prev && (
          <MdNavigateBefore
            className="cursor-pointer"
            size={50}
            onClick={() => {
              onPrevious();
              dispatch(prevPage());
            }}
          />
        )}
      </div>
      <div>
        <span className="font-bold text-[1.2vw]">{page}</span>
      </div>
      <div>
        {props.next && (
          <MdNavigateNext
            className="cursor-pointer"
            size={50}
            onClick={() => {
              onNext();
              dispatch(nextPage());
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Paginator;
