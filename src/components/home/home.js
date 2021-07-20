import { Component } from 'react';
import './home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: [],
        }
        const x = new XMLHttpRequest();
        x.open('GET', 'https://jsonplaceholder.typicode.com/users');
        x.send();
        x.addEventListener('load', () => {
            const data = JSON.parse(x.responseText);
            this.setState({
                details: data,
            })
            console.log(this.state.details);
        });
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
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
                                <tr>
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