import { Component } from 'react';
import './home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: [],
        }
    }

    async fetchData() {
        try {
            const res = await window.fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data)
            this.setState({
                details: data,
            })
        } catch (error) {
            console.error(error);
        }
      
    }

    componentDidMount() {
       this.fetchData();
    }


    render() {
        return (
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
                           this.state.details.map(x => (
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
        );
    }

}


export default Home;