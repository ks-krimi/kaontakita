import storage from '@react-native-firebase/storage';

export default file => onSuccess => onError => {
  const splite = file.path.split('/');
  const path = `contact-picture/${splite.pop()}`;
  const reference = storage().ref(path);

  const task = reference.putFile(file.path);

  task.on('state_changed', taskSnapshot => {
    console.log(
      `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
    );
  });

  task
    .then(async () => {
      const url = await reference.getDownloadURL();
      console.log('Image uploaded to the bucket!', url);
      onSuccess(url);
    })
    .catch(err => {
      onError(err);
    });
};
