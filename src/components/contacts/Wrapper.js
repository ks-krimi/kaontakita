import React from 'react';
import {Text} from 'react-native';
import Container from '../common/container';
import Modal from '../common/modal';
import Button from '../common/button';

const Wrapper = ({modalVisible, setModalVisible}) => {
  return (
    <Container>
      <Button
        color="primary"
        title="Open modal"
        onPress={() => setModalVisible(true)}
        style={{width: 125}}
      />
      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
        title="Title"
        footer={
          <>
            <Text>Close</Text>
            <Text>Ok</Text>
          </>
        }>
        <Text>Body</Text>
      </Modal>
    </Container>
  );
};

export default Wrapper;
