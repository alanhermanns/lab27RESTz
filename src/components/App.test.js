import React from 'react';
import { shallow } from 'enzyme';
import App from './App';



describe('App component', () => {
  it('has working methods', () => {
    const wrapper = shallow(<App />);
    const app = wrapper.instance();
    app.methodHandler({
      target: {
        value: 'post'
      },
      preventDefault: () => {
        return 'hello'
      }
    })
    app.sendTextToState({
      target: {
        value: 'Text'
      }
    })
    app.sendBodyToState({
      target: {
        value: 'body'
      }
    })

    expect(app.state).toEqual({
    BODY: 'body',
    URL: 'Text',
    Method:'post',
    loading: true,
    pastRequests: [],
    resultJSON: []
    })
  });
});
  