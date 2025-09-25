async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList);
  console.log(result);
  return await result;
}

function test(users) {
  return new Promise((resolve) => {
  setTimeout(() => {
    const newusers = users.map(user => {
      const newuser = {...user};
      newuser.full_name = `${user.family_name} ${user.first_name}`;
      return newuser;
      
    });
    resolve(newusers);
  },3000);
});
}

