import * as errorList from './errors.json';
import IErrList from '../interface/errorInterface';
import ApplicationError from './aplicationError';

function throwErr(code: number): never {
    const list = errorList as IErrList;
    const errorObject = list.errors.find((err) => code === err.code);

    if (errorObject) {
        throw new ApplicationError(
            errorObject.code,
            errorObject.message,
            errorObject.type,
            errorObject.http_code,
        );
    }

    throw new ApplicationError(
        list.default.code,
        list.default.message,
        list.default.type,
        list.default.http_code,
    );
}

export default throwErr;