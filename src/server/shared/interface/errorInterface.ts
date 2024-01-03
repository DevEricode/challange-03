interface IErrList {
    errors: {
        code: number;
        message: string;
        type: string;
        http_code: number;
    }[];
    default: {
        code: number;
        message: string;
        type: string;
        http_code: number;
    };
}

export default IErrList;