import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Corgis of NYC: Code of Conduct" },
    { content: "Welcome to Corgis of NYC", name: "description" }
  ];
};

export default function CodeOfConduct() {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md">
      <h2 className="flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700">
        Code of Conduct
      </h2>
      <p>
        Lorem ipsum dolor sit amet. Et magnam voluptas et tempore voluptasUt
        voluptate qui perferendis esse ea porro earum ut earum veniam. Cum quia
        dignissimos{" "}
        <strong>Id aliquam sed dolorem molestiae eum accusamus fugit</strong> id
        velit distinctio et omnis quae est natus fugiat. Aut internos sapiente{" "}
        <em>Sed eveniet quo eveniet omnis At dolore adipisci</em> et voluptates
        assumenda sit maiores cumque. Et earum enimAut delectus qui modi
        laboriosam in sequi atque.{" "}
      </p>
      <ol>
        <li>Aut dolore quia aut veritatis numquam qui magnam corrupti. </li>
        <li>Ut dolorem consequatur At quos incidunt. </li>
        <li>Et blanditiis tempore et aperiam consequuntur. </li>
        <li>
          Et nemo error et molestiae tempora qui asperiores rerum sit expedita
          accusamus.{" "}
        </li>
      </ol>
      <p>
        Nam facere enim{" "}
        <strong>
          Ab blanditiis qui praesentium saepe aut reprehenderit quis
        </strong>
        . Sit dolor ipsaEos quia cum officiis fugit quo numquam beatae et quia
        nostrum. Aut dolor rerum et sapiente odit <em>A tempora</em>.{" "}
      </p>
      <blockquote cite="https://www.loremipzum.com">
        Quo quia mollitia ab consequatur voluptas sed illum soluta eum
        dignissimos incidunt est dolorum quia?{" "}
      </blockquote>
      <p>
        Est eveniet dolore in provident aliquamin delectus id rerum possimus est
        quasi consequatur. Qui nihil recusandae nam explicabo minusNon maxime
        est aliquid nihil et ratione quod sit porro quasi aut porro dolor. Vel
        pariatur sequi est autem delectus{" "}
        <em>
          Ut voluptatem qui omnis debitis qui rerum dolorem aut quis provident
        </em>
        . Non recusandae quisEt culpa non internos nisi in dolorem veniam sit
        tenetur exercitationem ex odit sunt.{" "}
      </p>
    </div>
  );
}
