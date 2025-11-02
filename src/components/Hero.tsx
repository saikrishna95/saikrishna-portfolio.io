import { FileText, Mail, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import headshot from "@/assets/WhatsApp Image 2025-11-02 at 16.46.39.jpeg";
import resumeFile from "@/assets/SAI_KRISHNA_SAJJANAM_Analyst - Google Docs.pdf";

const Hero = () => {
  const gradientBtn =
    "min-w-[160px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white " +
    "bg-gradient-to-r from-blue-800 to-cyan-400 shadow-md hover:shadow-lg " +
    "transition-all duration-300 hover:scale-105";

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-start lg:items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(210,230,245,0.9), rgba(210,230,245,0.95)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* TEXT */}
        <div className="max-w-3xl">
          <p className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi <span className="align-middle">👋 </span>
            
            <br />  I am <span className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">Sai Krishna</span>
          </p>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-foreground/90">
            Analyst | SQL | Python | Power BI | PROJECT MANAGEMENT
          </h2>
          

          <p className="mt-6 text-[1.05rem] leading-relaxed text-gray-700 max-w-2xl font-light">
            I’m an <span className="font-medium text-gray-900">Analyst</span> with over{" "}
            <span className="font-medium">5 years of experience</span> helping businesses
            make smarter, data-driven decisions. I transform complex datasets into
            actionable insights — building automated ETL pipelines, designing Power BI
            dashboards, and applying machine learning for measurable business impact.
            With a background in financial services, regulatory reporting, and business
            intelligence, I focus on data quality, efficiency, and clarity through
            analytics and automation.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              className={gradientBtn}
              onClick={() => window.open(resumeFile, "_blank")}
            >
              <FileText className="w-5 h-5" />
              Download CV
            </button>

            <button
              className={gradientBtn}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>

            <button
              className={gradientBtn}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sai-krishna-sajjanam-52118ba3",
                  "_blank"
                )
              }
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </button>

            <button
              className={gradientBtn}
              onClick={() =>
                window.open("https://github.com/saikrishna95?tab=repositories", "_blank")
              }
            >
              <Github className="w-5 h-5" />
              GitHub
            </button>
          </div>

          {/* MOBILE/TABLET IMAGE (below text) */}
          <div className="mt-12 flex justify-center lg:hidden">
            <div className="relative rounded-full p-1.5 bg-gradient-to-b from-primary/30 to-transparent ring-2 ring-primary/30 shadow-lg">
              <div className="h-64 w-64 rounded-full overflow-hidden bg-card border border-border shadow-[0_20px_60px_rgba(59,130,246,0.25)]">
                <img src={headshot} alt="Sai Krishna" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP IMAGE — EXACT POSITION */}
        <div className="hidden lg:block">
          <div
            className="
              absolute
              lg:top-[140px]         /* vertical placement to match your mark */
              lg:right-[12%]         /* horizontal placement to match your mark */
            "
          >
            <div className="relative rounded-full p-1.5 bg-gradient-to-b from-primary/30 to-transparent ring-2 ring-primary/30 shadow-lg hover:scale-105 transition-transform duration-500">
              <div className="h-80 w-80 xl:h-[22rem] xl:w-[22rem] rounded-full overflow-hidden bg-card border border-border shadow-[0_20px_60px_rgba(59,130,246,0.25)]">
                <img src={headshot} alt="Sai Krishna" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
