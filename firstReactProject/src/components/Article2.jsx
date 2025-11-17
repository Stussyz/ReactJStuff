// render dynamic variable into html using react
// render array string using map function in react
function Article2() {
    const name = "Mohammad";
    const cars = ["BMW", "Honda", "Toyota"];
    return (
        <>
        <div>{name}</div>
        <div>
            {cars.map((car) => {
                return (
                    <>
                    <div>{car}</div>
                    <div>{car}</div>
                    </>
                );
            })}
        </div>
        </>
    );
}

export default Article2;