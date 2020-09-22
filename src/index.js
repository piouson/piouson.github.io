import "./scss/style.scss";
import "bootstrap";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faCodepen } from "@fortawesome/free-brands-svg-icons/faCodepen";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

library.add(faChevronRight, faCodepen, faGithub, faInstagram, faTwitter);
dom.watch();
