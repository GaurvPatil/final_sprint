import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Navbar() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Link
          href="admin/register/"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Create Invoice</span>{" "}
          <ArrowForwardIosIcon className="h-5 md:ml-4" />
        </Link>

        <Button variant="outlined" color="success">
          Admin
        </Button>
        <Button variant="outlined" color="success">
          Guide
        </Button>
        <Button variant="outlined" color="success">
          Student
        </Button>
      </Stack>
    </>
  );
}
