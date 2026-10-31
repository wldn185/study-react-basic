// Nav 컴포넌트
function Nav({ data }) {
  console.log(data);
  // const lists = data.map(function (d) {
  //   return (
  //     <li key={data.id}>
  //       <a href="">{d.title}</a>
  //     </li>
  //   );
  // });

  const lists = data.map((d) => (
    <li key={d.id}>
      <a href="">{d.title}</a>
    </li>
  ));
  // list 반복문을 이용해서 출력할 코드 생성

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}

export default Nav;
