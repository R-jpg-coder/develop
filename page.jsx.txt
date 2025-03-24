import Script from "next/script"
import { getDomain} from '../../lib/data';
const page = () => {
  const domain = getDomain();
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/cookie?d="+domain+"&container=cookie-script"} />
      <div className="cookie-script"></div>
    </>
  )
}

export default page