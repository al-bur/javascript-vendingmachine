// if (savedData.state.path === URL_PATH.PRODUCT_MANAGE) {
//   // 공통
//   this.#productManageView.show();
//   this.#balanceChargeView.hide();
//   this.#productPurchaseView.hide();
//   // 공통 끝

//   this.#featureSection.classList.remove('hide');
//   this.#authSection.classList.add('hide');

//   return;
// }

// #handleShowProductManageTab = () => {
//   if (!this.#productManageView.getIsRendered()) {
//     this.#productManageView.renderAll();
//   }

//   // 공통
//   this.#productManageView.show();
//   this.#balanceChargeView.hide();
//   this.#productPurchaseView.hide();
//   // 공통 끝

//   const path = URL_PATH.PRODUCT_MANAGE;
//   this.#handleUrlPath(path);
// };

// if (savedData.state.path === URL_PATH.BALANCE_CHAREGE) {
//   this.#balanceChargeView.show();
//   this.#productPurchaseView.hide();
//   this.#productManageView.hide();

//   this.#featureSection.classList.remove('hide');
//   this.#authSection.classList.add('hide');

//   return;
// }

// #handleShowBalanceChargeTab = () => {
//   if (!this.#balanceChargeView.getIsRendered()) {
//     this.#balanceChargeView.renderAll();
//   }

//   this.#balanceChargeView.show();
//   this.#productPurchaseView.hide();
//   this.#productManageView.hide();

//   const path = URL_PATH.BALANCE_CHAREGE;
//   this.#handleUrlPath(path);
// };

// if (savedData.state.path === URL_PATH.LOGIN) {
//   this.#featureSection.classList.add('hide');
//   this.#loginBtn.classList.add('hide');

//   this.#authSection.classList.remove('hide');
//   this.#authSection.textContent = '';
//   this.#loginView.render();

//   return;
// }

// #handleShowLoginPage = () => {
//   this.#featureSection.classList.add('hide');
//   this.#loginBtn.classList.add('hide');

//   this.#authSection.classList.remove('hide');
//   this.#authSection.textContent = '';
//   this.#loginView.render();

//   const path = URL_PATH.LOGIN;
//   this.#handleUrlPath(path);
// };

// #handleShowSignupPage = () => {
//   this.#featureSection.classList.add('hide');
//   this.#loginBtn.classList.add('hide');

//   this.#authSection.classList.remove('hide');
//   this.#authSection.textContent = '';
//   this.#signupView.render();

//   const path = URL_PATH.SINGUP;
//   this.#handleUrlPath(path);
// };

// if (savedData.state.path === URL_PATH.SINGUP) {
//   this.#featureSection.classList.add('hide');
//   this.#loginBtn.classList.add('hide');

//   this.#authSection.classList.remove('hide');
//   this.#authSection.textContent = '';
//   this.#signupView.render();

//   return;
// }

// #handleShowProductPurhcaseTab = () => {
//   if (!this.#productPurchaseView.getIsRendered()) {
//     this.#productPurchaseView.renderAll();
//   }

//   this.#productPurchaseView.show();
//   this.#balanceChargeView.hide();
//   this.#productManageView.hide();

//   const path = URL_PATH.PRODUCT_PURCHASE;
//   this.#handleUrlPath(path);
// };

// #renderHome = () => {
//   // 공통
//   this.#authSection.classList.add('hide');
//   this.#featureSection.classList.remove('hide');

//   const accessToken = localStorage.getItem('accessToken');

//   if (!!accessToken) {
//     this.#profile.render();
//     this.#thumbnail.classList.add('hide');
//     this.#loginBtn.classList.remove('hide');
//     this.#nav.classList.add('hide');

//     return;
//   }
//   // 로그인
//   this.#thumbnail.classList.remove('hide');
//   this.#loginBtn.classList.add('hide');

//   this.#handleShowProductPurhcaseTab();
// };

// #handleShowLoginCompletedPage = () => {
//   this.#authSection.classList.add('hide');
//   this.#loginBtn.classList.add('hide');

//   this.#thumbnail.classList.remove('hide');
//   this.#profile.render();
//   this.#featureSection.classList.remove('hide');
//   this.#nav.classList.remove('hide');
// };

// #handleShowLogoutCompletedPage = () => {
//   this.#authSection.classList.add('hide');
//   this.#nav.classList.add('hide');
//   this.#thumbnail.classList.add('hide');

//   this.#featureSection.classList.remove('hide');
//   this.#loginBtn.classList.remove('hide');
//   this.#handleShowProductPurhcaseTab();
// };
