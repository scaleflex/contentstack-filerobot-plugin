import React, { Suspense } from "react";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { MarketplaceAppProvider } from "../../common/providers/MarketplaceAppProvider";
import { Route, Routes } from "react-router-dom";
import { AppConfigurationExtensionProvider } from "../../common/providers/AppConfigurationExtensionProvider";
import CustomFieldLoader from "../../components/Loaders/CustomFieldLoader";
import CustomFieldProvider from "../../common/providers/CustomFieldProvider";
import SelectorPageLoader from "../../components/Loaders/SelectorPage";
import ConfigLoader from "../../components/Loaders/ConfigLoader";
/* Import node module CSS */
import "@contentstack/venus-components/build/main.css";
// import FieldModifierExtension from "../FieldModifier/FieldModifier";
// import { CustomFieldExtensionProvider } from "../../common/providers/CustomFieldExtensionProvider";
// import { EntrySidebarExtensionProvider } from "../../common/providers/EntrySidebarExtensionProvider";
/**
 * All the routes are Lazy loaded.
 * This will ensure the bundle contains only the core code and respective route bundle
 * improving the page load time
 */
//const CustomFieldExtension = React.lazy(() => import("../CustomField/CustomField"));

const AppConfigurationExtension = React.lazy(() => import("../AppConfiguration/AppConfiguration"));
const SelectorPage = React.lazy(() => import("../SelectorPage"));
const CustomField = React.lazy(() => import("../CustomField"));
const PageNotFound = React.lazy(() => import("../404/404"));
//const DefaultPage = React.lazy(() => import("../index"));
// const AssetSidebarExtension = React.lazy(() => import("../AssetSidebarWidget/AssetSidebar"));
// const StackDashboardExtension = React.lazy(() => import("../DashboardWidget/StackDashboard"));
// const EntrySidebarExtension = React.lazy(() => import("../SidebarWidget/EntrySidebar"));
// const FullPageExtension = React.lazy(() => import("../FullPage/FullPage"));

function App() {
  return (
    <ErrorBoundary>
      <MarketplaceAppProvider>
        <Routes>
          <Route path="/" element={<></>} />
          <Route
            path="/custom-field"
            element={
              <Suspense fallback={<CustomFieldLoader />}>
                <CustomFieldProvider>
                      <CustomField />
                </CustomFieldProvider>
              </Suspense>
            }
          />
          <Route
                path="/selector-page"
                element={
                  <Suspense fallback={<SelectorPageLoader />}>
                    <SelectorPage />
                  </Suspense>
                }
              />
          {/* <Route
            path="/entry-sidebar"
            element={
              <Suspense>
                <EntrySidebarExtensionProvider>
                  <EntrySidebarExtension />
                </EntrySidebarExtensionProvider>
              </Suspense>
            }
          /> */}
          <Route
            path="/app-configuration"
            element={
              <Suspense fallback={<ConfigLoader />}>
                <AppConfigurationExtensionProvider>
                  <AppConfigurationExtension />
                </AppConfigurationExtensionProvider>
              </Suspense>
            }
          />
          {/* <Route
            path="/asset-sidebar"
            element={
              <Suspense>
                <AssetSidebarExtension />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="/stack-dashboard"
            element={
              <Suspense>
                <StackDashboardExtension />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="/full-page"
            element={
              <Suspense>
                <FullPageExtension />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="/field-modifier"
            element={
              <Suspense>
                <FieldModifierExtension />
              </Suspense>
            }
          /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MarketplaceAppProvider>
    </ErrorBoundary>
  );
}

export default App;
