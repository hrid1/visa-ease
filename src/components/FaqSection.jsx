import faqimg from "../assets/faq.png";

const FaqSection = () => {
  return (
    <div className="my-6">
      <h2 className="text-xl md:text-4xl font-bold  text-center my-4">
        Frequently Asked Questions
      </h2>

      <section className="flex flex-col md:flex-row items-center justify-center gap-8 b">
        {/* img */}
        <div className=" w-full md:w-1/2 p-2  rounded-md">
          <img className="w-full h-full object-cover" src={faqimg} alt="" />
        </div>

        {/* FAQ */}
        <div className=" space-y-4 w-full md:w-1/2">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
