import React from 'react';
import { CharacterInfoResponse } from '../../types/api/characters';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Paginator: React.FC<{ props: CharacterInfoResponse; onPrevious: () => void; onNext: () => void }> = ({ props, onPrevious, onNext }) => {
    return (
        <div className='flex gap-10 mt-10 justify-center'>
            <div>
                {props.prev && <MdNavigateBefore size={50} onClick={onPrevious} />}
            </div>
            <div>
                {props.next && <MdNavigateNext size={50} onClick={onNext} />}
            </div>
        </div>
    );
};

export default Paginator;
