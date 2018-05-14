import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

import { AppState } from '../../store/app.store';

import { BlockActions } from '../../actions/block.actions';
import { BlockState } from '../../reducers/block.reducer';

import BlockAdproofsComponent from '../../components/block/block-adproofs/block-adproofs.component';
import BlockHeaderComponent from '../../components/block/block-header/block-header.component';
import BlockInfoComponent from '../../components/block/block-info/block-info.component';
import BlockTransactionsComponent from '../../components/block/block-transactions/block-transactions.component';

import './block.scss';

class BlockComponent extends React.Component {
  props: RouteComponentProps<{ id: string }> & BlockState & BlockActions;
  
  constructor (props: any) {
    super(props);
    
    this.renderComponent = this.renderComponent.bind(this);
  }
  
  componentDidMount (): void {
    this.props.getBlock({ id: this.props.match.params.id });
  }
  
  render (): JSX.Element {
    return (
      <div className='bi-block'>
        { this.props.fetching ? null : this.renderBlockPage() }
      </div>
    );
  }
  
  private renderBlockPage (): JSX.Element {
    return (
      <div className='bi-block__wrapper'>
        <div className='bi-block__header'>
          <BlockHeaderComponent block={ this.props.block }
                                references={ this.props.references }/>
        </div>
        
        <div className='bi-block__body'>
          <Switch>
            <Route path={ `/blocks/:id` }
                   exact={ true }
                   render={
                     this.renderComponent(<BlockInfoComponent block={ this.props.block }/>)
                   }/>
            
            <Route path={ `/blocks/:id/transactions` }
                   exact={ true }
                   component={
                     this.renderComponent(<BlockTransactionsComponent/>)
                   }/>
            
            <Route path={ `/blocks/:id/adproofs` }
                   exact={ true }
                   component={
                     this.renderComponent(<BlockAdproofsComponent/>)
                   }/>
          </Switch>
        </div>
      </div>
    );
  }
  
  private renderComponent (element: JSX.Element): () => JSX.Element {
    return () => element;
  }
}

function mapStateToProps (state: AppState): BlockState {
  return state.block;
}

function mapDispatchToProps (dispatch: any): ActionCreatorsMapObject {
  return bindActionCreators(BlockActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockComponent);
