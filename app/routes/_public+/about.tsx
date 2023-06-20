import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Corgis of NYC: About" },
    { content: "Welcome to Corgis of NYC", name: "description" }
  ];
};

export default function About() {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md">
      <h2 className="flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700">
        About
      </h2>
      <p>
        We are the Corgis of NYC, a monthly meetup group, where little (chonk)
        legs come together in the big city.
      </p>
      <p>
        Shortly after bringing home our floof{" "}
        <a
          className="text-blue-600 underline-offset-4 hover:underline"
          href="https://www.instagram.com/franklin_corgi_nyc/"
          rel="noreferrer"
          target="_blank"
        >
          Franklin
        </a>{" "}
        during COVID, we began to look for ways to socialize him with other
        corgis. We had heard of meetup groups in the city pre-COVID, but hadn't
        been able to find anything active.
      </p>
      <p>
        <strong>Enter phase 1.</strong> We started our own Instagram page called{" "}
        <a
          className="text-blue-600 underline-offset-4 hover:underline"
          href="https://www.instagram.com/corgis_of_nyc/"
          rel="noreferrer"
          target="_blank"
        >
          The Corgis of NYC
        </a>
        , having no idea where it would go. We told all of our corgi friends in
        the dog park on the UES, and shared our newly created @Corgis_of_NYC
        page on Franklin's account.
      </p>
      <p>
        Not knowing what we were doing, we hosted the first meetup in Central
        Park, after off-leash hours in April of 2021 (and got yelled at by a CP
        employee). We were shocked to see so many people―complete strangers to
        us at the time―come out to this meetup. Everyone expressed how grateful
        they were to find out that Corgi meetups were happening again. In what
        felt like a blink of an eye, it took off from there.
      </p>
      <p>
        Our vision was for this to be a corgi community, run by the community
        itself, where we suggest a few dates and locations based on feedback
        from other Corgi parents. We conduct a poll on Instagram with a few
        options and whichever date and location has the most votes gets chosen.
        It has been almost entirely grown through word-of-mouth, as we hardly
        post on the account except for the stories to vote for date and place
        (and then repost stories after the meetup with all of our tagged
        photos).
      </p>
      <p>
        Here we are now 2 years later, and we see at least 100 Corgis come out
        each month.
      </p>
      <p>
        <strong>Enter phase 2.</strong> We have launched this website, thanks to
        the amazing efforts of Atticus the Corgi and his father 🙌.
      </p>
      <p>
        Our polling results on Instagram for where and when to host our meetups
        have become hard to interpret, so we are hoping the deployment of this
        website will help to make sure only those that really plan to attend
        cast their votes.
      </p>
      <p>
        Looking forward to continue celebrating corgi meetups with our corgi
        community!
      </p>
    </div>
  );
}
