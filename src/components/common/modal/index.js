import React from 'react';
import {Text, Modal, TouchableOpacity, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../icon';
import styles from './styles';

const CustomeModal = ({
  visible,
  setVisible,
  title,
  footer,
  children,
  tapOutside,
}) => {
  return (
    <Modal visible={visible} transparent animationType="none">
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => {
          if (tapOutside) {
            setVisible(false);
          }
        }}>
        <View style={styles.content}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}>
                <Icon
                  style={styles.close}
                  type="MaterialIcons"
                  name="close"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={styles.body}>{children}</View>
            {footer && (
              <>
                <View style={styles.separator} />
                <View style={styles.footer}>{footer}</View>
              </>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

CustomeModal.propTypes = {
  tapOutside: PropTypes.bool,
};

CustomeModal.defaultProps = {
  tapOutside: true,
};

export default CustomeModal;
