import './table.css'

export default function Table({data}) {
    
    return (
        <table className="tb">
            <tbody className="t-b-d">
                <tr className="t-row">
                    <th className="t-head">FirstName</th>
                    <th className="t-head">LastName</th>
                    <th className="t-head">Email</th>
                    <th className="t-head">Phone</th>
                </tr>
                {data.map(item=>(
                <tr key={item.id} className="t-row">
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
