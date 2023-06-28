import React from 'react'

import Script from 'dangerous-html/react'

import NavigationLinks from './navigation-links'
import NavigationLinks1 from './navigation-links1'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div data-modal="practices" className={styles['modal']}>
        <div className={styles['practices']}>
          <div className={styles['heading']}>
            <span className={styles['header']}>Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className={styles['close']}
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className={styles['grid']}>
            <div className={styles['section']}>
              <div className={styles['heading01']}>
                <span className={styles['header01']}>Cardiology</span>
                <span className={styles['caption']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image']}
                />
              </div>
            </div>
            <div className={styles['section1']}>
              <div className={styles['heading02']}>
                <span className={styles['header02']}>Orthopedics</span>
                <span className={styles['caption1']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text01']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image01']}
                />
              </div>
            </div>
            <div className={styles['section2']}>
              <div className={styles['heading03']}>
                <span className={styles['header03']}>Ophtalmology</span>
                <span className={styles['caption2']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text02']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image02']}
                />
              </div>
            </div>
            <div className={styles['section3']}>
              <div className={styles['heading04']}>
                <span className={styles['header04']}>Pediatrics</span>
                <span className={styles['caption3']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text03']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image03']}
                />
              </div>
            </div>
            <div className={styles['section4']}>
              <div className={styles['heading05']}>
                <span className={styles['header05']}>Nutrition</span>
                <span className={styles['caption4']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text04']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image04']}
                />
              </div>
            </div>
            <div className={styles['section5']}>
              <div className={styles['heading06']}>
                <span className={styles['header06']}>General</span>
                <span className={styles['caption5']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className={projectStyles['read-more']}>
                <span className={styles['text05']}>Read more</span>
                <img
                  alt="image"
                  src="/arrow-2.svg"
                  className={styles['image05']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles['hero']}>
        <header data-thq="thq-navbar" className={styles['navbar']}>
          <div className={styles['left']}></div>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className={styles['image06']}
          />
          <div data-thq="thq-burger-menu" className={styles['burger-menu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon01']}>
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className={styles['nav']}
            >
              <div className={styles['container1']}>
                <img
                  alt="image"
                  src="/logo-1500h.png"
                  className={styles['image07']}
                />
                <div data-thq="thq-close-menu" className={styles['menu-close']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon03']}>
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className={styles['nav01']}
              >
                <span className={styles['text06']}>Features</span>
                <span className={styles['text07']}>How it works</span>
                <span className={styles['text08']}>Prices</span>
                <span className={styles['text09']}>Contact</span>
                <a
                  href="#book"
                  className={` ${styles['book']} ${projectStyles['button']} ${projectStyles['button-main']} `}
                >
                  <img
                    alt="image"
                    src="/calendar.svg"
                    className={styles['image08']}
                  />
                  <span className={styles['text10']}>Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <header data-thq="thq-navbar" className={styles['navbar1']}>
          <div className={styles['left1']}></div>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className={styles['image09']}
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className={styles['image10']}
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className={styles['image11']}
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className={styles['image12']}
          />
          <div data-thq="thq-burger-menu" className={styles['burger-menu1']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon05']}>
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className={styles['mobile-menu1']}>
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className={styles['nav02']}
            >
              <div className={styles['container2']}>
                <img
                  alt="image"
                  src="/logo-1500h.png"
                  className={styles['image13']}
                />
                <div
                  data-thq="thq-close-menu"
                  className={styles['menu-close1']}
                >
                  <svg viewBox="0 0 1024 1024" className={styles['icon07']}>
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className={styles['nav03']}
              >
                <span className={styles['text11']}>Features</span>
                <span className={styles['text12']}>How it works</span>
                <span className={styles['text13']}>Prices</span>
                <span className={styles['text14']}>Contact</span>
                <a
                  href="#book"
                  className={` ${styles['book1']} ${projectStyles['button']} ${projectStyles['button-main']} `}
                >
                  <img
                    alt="image"
                    src="/calendar.svg"
                    className={styles['image14']}
                  />
                  <span className={styles['text15']}>Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <h1 className={styles['header07']}>De-Med</h1>
        <div className={styles['container3']}>
          <div className={styles['content']}>
            <div className={styles['heading07']}>
              <p className={styles['caption6']}>(Deprescribing Medications)</p>
              <p className={styles['caption7']}>Deprescribing Medications</p>
              <p className={styles['caption8']}>(Deprescribing Medications)</p>
            </div>
          </div>
        </div>
        <span className={styles['text16']}>
          <span>
                  Welcome to De-Med, your trusted resource for promoting safe
            and appropriate medication
          </span>
          <br></br>
          <br></br>
          <span>
            practices in the elderly population. We understand the unique
            challenges that come with managing
          </span>
          <br></br>
          <br></br>
          <span>
              medications for older adults, and our mission is to provide a
            comprehensive solution that focuses
          </span>
          <br></br>
          <br></br>
          <span>
                                        on timely identification of potentially
            inappropriate medications.
          </span>
        </span>
        <span className={styles['text27']}>
          A collaboration of JSS AHER (Dept. of Clinical Pharmacy) &amp; JSS
          ATE- Noida (Dept. of IT)
        </span>
        <span className={styles['text28']}>
          A collaboration of JSS AHER (Dept. of Clinical Pharmacy) &amp; JSS
          ATE- Noida (Dept. of IT)
        </span>
        <button
          className={` ${styles['book2']} ${projectStyles['button']} ${projectStyles['button-main']} `}
        >
          <span>START</span>
        </button>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className={styles['image15']}
        />
        <header data-role="Accordion" className={styles['header08']}>
          <div className={styles['separator']}></div>
          <nav className={styles['nav04']}>
            <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
          </nav>
          <div
            data-role="AccordionHeader"
            className={styles['accordion-header']}
          >
            <svg viewBox="0 0 1024 1024" className={styles['icon09']}>
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-role="AccordionContent"
            className={styles['accordion-content']}
          >
            <div className={styles['nav05']}>
              <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
            </div>
          </div>
        </header>
      </section>
      <div className={styles['search']}>
        <div className={styles['content1']}>
          <div className={styles['type-one']}>
            <div data-teleport="results" className={styles['results']}>
              <span className={styles['heading08']}>Results:</span>
              <div data-results="letters" className={styles['list']}></div>
            </div>
            <svg viewBox="0 0 1024 1024" className={styles['icon11']}>
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className={styles['icon13']}>
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className={styles['icon15']}>
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <input
              type="text"
              placeholder="placeholder"
              className={` ${styles['textinput']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              placeholder="placeholder"
              className={` ${styles['textinput1']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              placeholder="placeholder"
              className={` ${styles['textinput2']} ${projectStyles['input']} `}
            />
            <header data-role="Accordion" className={styles['header09']}>
              <div className={styles['separator1']}></div>
              <nav className={styles['nav06']}>
                <NavigationLinks1 rootClassName="rootClassName19"></NavigationLinks1>
              </nav>
              <div
                data-role="AccordionHeader"
                className={styles['accordion-header1']}
              >
                <svg viewBox="0 0 1024 1024" className={styles['icon17']}>
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div
                data-role="AccordionContent"
                className={styles['accordion-content1']}
              >
                <div className={styles['nav07']}>
                  <NavigationLinks1 rootClassName="rootClassName20"></NavigationLinks1>
                </div>
              </div>
            </header>
            <h1 className={styles['header10']}>                De-Med</h1>
          </div>
          <div className={styles['type-two']}>
            <div className={styles['heading09']}></div>
          </div>
          <button
            className={` ${styles['book3']} ${projectStyles['button']} ${projectStyles['button-main']} `}
          >
            <span className={styles['text30']}>CHECK</span>
          </button>
          <span className={styles['text31']}>
            Empowering Safe and Appropriate Medication Use in the Elderly
          </span>
        </div>
      </div>
      <header data-role="Accordion" className={styles['header11']}>
        <div className={styles['separator2']}></div>
        <nav className={styles['nav08']}>
          <NavigationLinks1 rootClassName="rootClassName8"></NavigationLinks1>
        </nav>
        <div
          data-role="AccordionHeader"
          className={styles['accordion-header2']}
        >
          <svg viewBox="0 0 1024 1024" className={styles['icon19']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="AccordionContent"
          className={styles['accordion-content2']}
        >
          <div className={styles['nav09']}>
            <NavigationLinks1 rootClassName="rootClassName9"></NavigationLinks1>
          </div>
        </div>
      </header>
      <section id="book" className={styles['book4']}>
        <div className={styles['heading10']}></div>
        <span className={styles['text32']}>
          A collaboration of JSS AHER (Dept. of Clinical Pharmacy) &amp; JSS
          ATE- Noida (Dept. of IT)
        </span>
      </section>
      <div className={styles['footer']}>
        <div className={styles['container4']}>
          <p className={styles['text33']}>De-Med</p>
          <div className={styles['container5']}>
            <div className={styles['left2']}>
              <div className={styles['brand']}></div>
              <div className={styles['socials']}>
                <div className={projectStyles['social']}>
                  <img
                    alt="image"
                    src="/insider.svg"
                    className={styles['image16']}
                  />
                </div>
                <div className={projectStyles['social']}>
                  <img
                    alt="image"
                    src="/instagram.svg"
                    className={styles['image17']}
                  />
                </div>
                <div className={projectStyles['social']}>
                  <img
                    alt="image"
                    src="/twitter.svg"
                    className={styles['image18']}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['right']}>
          <div className={styles['list1']}>
            <span className={styles['header12']}>Menu</span>
            <div className={styles['links']}>
              <span className={styles['link']}>Home</span>
              <span className={styles['link01']}>About</span>
              <span className={styles['link02']}>Services</span>
              <span className={styles['link03']}>Blog</span>
              <span className={styles['link04']}>Support</span>
            </div>
          </div>
          <div className={styles['list2']}>
            <span className={styles['header13']}>Resources</span>
            <div className={styles['links1']}>
              <span className={styles['link05']}>Test Results</span>
              <span className={styles['link06']}>Patients</span>
              <span className={styles['link07']}>Doctors</span>
              <span className={styles['link08']}>Health</span>
            </div>
          </div>
          <div className={styles['list3']}>
            <span className={styles['header14']}>Contact</span>
            <div className={styles['links2']}>
              <span className={styles['link09']}>
                Street Name, City FI 01234, RO
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className={styles['link10']}
              >
                contact@EMAIL
              </a>
              <a href="tel:(004) 234 - 5678" className={styles['link11']}>
                (004) 234 - 5678
              </a>
            </div>
          </div>
        </div>
        <div className={styles['legal']}>
          <div className={styles['row']}>
            <span className={projectStyles['legal-link']}>Privacy Policy</span>
            <span className={projectStyles['legal-link']}>Terms of Use</span>
          </div>
          <span className={styles['copyright2']}>
            © 2022 finbest. All Rights Reserved.
          </span>
        </div>
      </div>
      <div className={styles['download']}></div>
      <div>
        <Script
          html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
        ></Script>
      </div>
      <div>
        <Script
          html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
        ></Script>
      </div>
      <div>
        <Script
          html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
