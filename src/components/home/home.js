import { Component } from 'react';
import './home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        const x = new XMLHttpRequest();
        x.open('GET', 'https://jsonplaceholder.typicode.com/users');
        x.send();
        x.addEventListener('load', () => {
            const details = JSON.parse(x.responseText);
            console.log(details);
            return details;
        });
    }

    render() {
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.details.map(x => (
                                <tr>
                                    <th scope="row">{x.id}</th>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
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