export function Tables(): JSX.Element {
    return (
        <section>
            <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>Jane</td>
                        <td>Doe</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Michael</td>
                        <td>Johnson</td>
                        <td>40</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}