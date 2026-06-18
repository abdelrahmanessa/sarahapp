
export const correctresponce = ({
    res,
    message = 'Success',
    data = undefined,
    status = 200,
    extra = undefined
}={
}) => {
    res.status(status).json({
        message,
        data,
        extra
    });
}