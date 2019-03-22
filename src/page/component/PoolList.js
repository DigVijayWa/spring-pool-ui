import React,{Component} from 'react';
import Pool from './Pool';
class PoolList extends Component {

  constructor(props) {
    super(props);
    this.state = {pool: []};
  }
  componentDidMount() {
   /* client({method: 'GET', path: 'http://localhost:8080/api/poolTables'}).done(response => {
              this.setState({pool: response.entity._embedded.poolTables});
      });*/
  }
	
  render() {
		let pools = this.state.pool.map((pool,i)=> {
				return(
					<Pool key={i} pool={pool}/>
				);
			}
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Building No</th>
						<th>Floor No</th>
						<th>Condition</th>
					</tr>
					{pools}
				</tbody>
			</table>
		);
	}
}
export default PoolList;