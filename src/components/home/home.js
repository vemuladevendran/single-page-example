import { PureComponent } from 'react';
import axios from 'axios';
import './home.css';

class Home extends PureComponent {
    details = [];

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
        }
    }

    async fetchData() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            this.details = res.data;
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-primary table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Web Site</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tableData.map(x => (
                                    <tr key={x.id}>
                                        <th scope="row">{x.id}</th>
                                        <td>{x.name}</td>
                                        <td>{x.email}</td>
                                        <td>{x.username}</td>
                                        <td>{x.phone}</td>
                                        <td>{x.website}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={() => {
                        if (this.state.tableData.length === this.details.length) {
                            return;
                        }

                        const tableData = [...this.state.tableData, this.details[this.state.tableData.length]];
                        this.setState({
                            tableData,
                        })
                    }}>Show next</button>
                </div>
            </div>
        );
    }

}


export default Home;