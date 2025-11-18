// props for passing data from parent to child component
function Article3(props) {
    return (
        <>
            <div>{props.name}</div>
            <div>
                {props.titles.map((title) => {
                    return <div>{title}</div>;
                })}
            </div>
        </>
    );
}

export default Article3;