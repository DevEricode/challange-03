class ApplicationError extends Error {
    public code: number;
    public message: string;
    public type: string;
    public http_code: number;

    constructor(
        code: number,
        message: string,
        type: string,
        http_code: number,
    ) {
        super(message);
        this.code = code;
        this.message = message;
        this.type = type;
        this.http_code = http_code;
    }
}

export default ApplicationError;