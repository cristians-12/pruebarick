import React from 'react';

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { InfoResponse } from '../../types/api/response';

const Paginator: React.FC<{ props: InfoResponse; onPrevious: () => void; onNext: () => void }> = ({ props, onPrevious, onNext }) => {
    return (
        <div className='flex gap-10 mt-10 justify-center'>
            <div>
                {props.prev && <MdNavigateBefore className='cursor-pointer' size={50} onClick={onPrevious} />}
            </div>
            <div>
                {props.next && <MdNavigateNext className='cursor-pointer' size={50} onClick={onNext} />}
            </div>
        </div>
    );
};

export default Paginator;
