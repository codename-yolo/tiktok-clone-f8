const withLoading = (WrappedComponent: React.FC<any>) => {
    const WithLoadingComponent: React.FC<any> = ({ isLoading, ...props }) => {
        if (isLoading) {
            return <div>Loading ......</div>;
        }

        return <WrappedComponent {...props} />;
    };

    return WithLoadingComponent;
};

export default withLoading;
