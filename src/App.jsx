import styles from "./app.module.css";
function App() {
  return (
    <>
      <div className={styles.navbar}>
        <a href="https://openmarkethub.com">Home</a>

        <a href="https://openmarkethub.com">About</a>

        <a href="https://www.openmarkethub.com/contact"> Contact</a>

        <a href="https://www.openmarkethub.com/marketplace"> Services</a>

        <a href="https://www.google.com/maps/place/Texas+Tech+University/@33.5845518,-101.8849266,15z/data=!3m1!4b1!4m6!3m5!1s0x8640c413f31ec847:0x52db374b7b07849!8m2!3d33.5845522!4d-101.8746483!16zL20vMDFuX2c5?entry=ttu">
          Location
        </a>
        <a href="https://www.openmarkethub.com/api"> LogIn</a>
      </div>
      <div className={styles.layout}>
        <div className={styles.column1}>
          <ul>
            <li>
              <a href="https://openmarkethub.com">Early Life</a>
            </li>
            <li>
              <a href="https://openmarkethub.com">Early Career</a>
            </li>
            <li>
              <a href="https://openmarkethub.com">Private and Political Life</a>
            </li>
            <li>
              <a href="https://openmarkethub.com">Manhattan project</a>
            </li>
            <li>
              <a href="https://openmarkethub.com">Awards</a>
            </li>
          </ul>
        </div>
        <div className={styles.column2}>
          <h1 className={styles.heading}>Robert Oppenhiemer</h1>
          <img
            className={styles.image}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Oppenheimer_%28cropped%29.jpg/220px-Oppenheimer_%28cropped%29.jpg"
          />
          J. Robert Oppenheimer (born Julius Robert Oppenheimer; /ˈɒpənhaɪmər/
          OP-ən-hy-mər; April 22, 1904 – February 18, 1967) was an American
          theoretical physicist and director of the Manhattan Project's Los
          Alamos Laboratory during World War II. He is often called the "father
          of the atomic bomb". Born in New York City, Oppenheimer earned a
          bachelor of arts degree in chemistry from Harvard University in 1925
          and a doctorate in physics from the University of Göttingen in Germany
          in 1927, where he studied under Max Born. After research at other
          institutions, he joined the physics department at the University of
          California, Berkeley, where he became a full professor in 1936. He
          made significant contributions to theoretical physics, including
          achievements in quantum mechanics and nuclear physics such as the
          Born–Oppenheimer approximation for molecular wave functions, work on
          the theory of electrons and positrons, the Oppenheimer–Phillips
          process in nuclear fusion, and early work on quantum tunneling. With
          his students, he also made contributions to the theory of neutron
          stars and black holes, quantum field theory, and the interactions of
          cosmic rays. In 1942, Oppenheimer was recruited to work on the
          Manhattan Project, and in 1943 he was appointed director of the
          project's Los Alamos Laboratory in New Mexico, tasked with developing
          the first nuclear weapons. His leadership and scientific expertise
          were instrumental in the project's success. On July 16, 1945, he was
          present at the first test of the atomic bomb, Trinity. In August 1945,
          the weapons were used against Japan in the bombings of Hiroshima and
          Nagasaki, the only use of nuclear weapons in an armed conflict. In
          1947, Oppenheimer became the director of the Institute for Advanced
          Study in Princeton, New Jersey, and chaired the influential General
          Advisory Committee of the newly created U.S. Atomic Energy Commission.
          He lobbied for international control of nuclear power to avert nuclear
          proliferation and a nuclear arms race with the Soviet Union. He
          opposed the development of the hydrogen bomb during a 1949–1950
          governmental debate on the question and subsequently took positions on
          defense-related issues that provoked the ire of some U.S. government
          and military factions. During the second Red Scare, Oppenheimer's
          stances, together with his past associations with the Communist Party
          USA, led to the revocation of his security clearance following a 1954
          security hearing. This effectively ended his access to the
          government's atomic secrets and thus his career as a nuclear
          physicist. Stripped also of his direct political influence,
          Oppenheimer continued to lecture, write, and work in physics. In 1963,
          he was awarded the Enrico Fermi Award as a gesture of political
          rehabilitation. He died four years later of throat cancer. In 2022,
          the federal government vacated the 1954 revocation of Oppenheimer's
          security clearance.
        </div>
      </div>
      <div className={styles.footer}> The End</div>
    </>
  );
}

export default App;
