import { Route, Routes } from "react-router-dom";
import { HomePage } from "src/components/pages/home/home_page";
import { JOB_PAGE_PATH, JobPage } from "src/components/pages/job/job_page";
import {
  MACHINE_PAGE_PATH,
  MachinePage,
} from "src/components/pages/machine/machine_page";
import { NotFoundPage } from "src/components/pages/not_found/not_found_page";

/**
 * This page has strong relationship with header.tsx.
 */
export const AppRoute: React.FC = () => {
  console.log("aaa");
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={JOB_PAGE_PATH} element={<JobPage />} />
      <Route path={MACHINE_PAGE_PATH} element={<MachinePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
