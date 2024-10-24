import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type PaginationProps = {
    flag: boolean
};

const PaginationComponent: FC<PaginationProps> = ({flag}) => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const onclickPreviousHandler = () => {
        const page = query.get('page');
        if (page && +page > 0) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()});
        }
    };

    const onclickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()});
        }
    };

    return (
        <div>
            <button onClick={onclickPreviousHandler}>Previous</button>
            <button onClick={onclickNextHandler} disabled={flag}>Next</button>
        </div>
    );
};

export default PaginationComponent;