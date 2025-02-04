export default function TaskStatus({onComplete, children}) {
    const style = {
    border: '2px solid green',
    padding: '16px',
    margin: '10px',
    height: '40px',
    width : '150px',
    };
    return (
    <div className="Task" style={style} onClick={onComplete}>{children}</div>
    )
   }