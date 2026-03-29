import React from "react";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  Content: React.FC;
}

const APP_STORE_URL =
  "https://apps.apple.com/app/berea/id6759158035";

function Post1Content() {
  return (
    <article className="prose-berea">
      <p>
        Every week, millions of people sit in church pews with their phone in hand — not
        scrolling, but trying to capture something worth keeping. A verse. An illustration.
        A sentence that might change something.
      </p>
      <p>
        The problem is the notes never quite capture the sermon. You type fast and miss
        the context. You highlight a verse and lose the thread. You walk out with fragments.
      </p>
      <p>
        That&apos;s what AI sermon notes apps are trying to fix. After reviewing every major
        option on the market, here&apos;s an honest breakdown of who&apos;s doing it best in 2026.
      </p>

      <h2>1. Sermon Scribe — Best for Personal Devotional Use</h2>
      <p>
        Sermon Scribe is the App Store leader with good reason. It records and transcribes
        your sermon, then generates summaries, reflection questions, and outlines. It also
        has a Bible chat feature and daily devotionals. If you&apos;re a regular churchgoer
        looking for a personal faith companion, it&apos;s polished and it works.
      </p>
      <p>
        <strong>Best for:</strong> Individual attendees who want a premium, all-in-one app.
        <br />
        <strong>Pricing:</strong> $9.99–$12.99/month, $39.99–$69.99/year.
        <br />
        <strong>Weakness:</strong> No support for languages other than English. No
        small-group-leader features.
      </p>

      <h2>2. Sermon Keeper — Best for Simplicity</h2>
      <p>
        Sermon Keeper doesn&apos;t try to do everything. Record a sermon, get a transcription,
        add notes, export it to your email. Clean, fast, and private. They&apos;ve added Spanish
        support, which is a step toward the global church.
      </p>
      <p>
        <strong>Best for:</strong> People who want fast and simple without a steep learning
        curve.
        <br />
        <strong>Pricing:</strong> $6.99/month, $64.99/year. 3 free recordings.
        <br />
        <strong>Weakness:</strong> Bible support is KJV only. Limited AI depth.
      </p>

      <h2>3. Spirit Notes — Best for the iPad User</h2>
      <p>
        Spirit Notes shines on iPad with a three-column layout built specifically for
        note-taking during church. It supports 10+ Bible translations (ESV, NIV, NKJV,
        NLT, MSG, and more) and lets you organize notes by preacher or topic.
      </p>
      <p>
        <strong>Best for:</strong> iPad users, Bible college students, home group
        participants.
        <br />
        <strong>Pricing:</strong> Appears free or freemium.
        <br />
        <strong>Weakness:</strong> Less AI-forward than newer apps. Live transcription is
        not a core feature.
      </p>

      <h2>4. SermonSpark — Best for Pastors Writing Sermons</h2>
      <p>
        If you&apos;re a pastor who needs to write sermons faster — not take notes on sermons
        — SermonSpark is built for you. Sixty-second sermon outlines, Greek/Hebrew word
        tools, social media post generation from your notes. It&apos;s a content creation tool,
        not a note-taking tool.
      </p>
      <p>
        <strong>Best for:</strong> Pastors who prep and deliver weekly messages.
        <br />
        <strong>Pricing:</strong> Free (500 credits/month) → $7.95/month for 3,000 credits.
        <br />
        <strong>Weakness:</strong> Web-first. No live recording or listener-side use case.
      </p>

      <h2>5. Berea — Best for Serious Students of Scripture</h2>
      <p>
        Berea is built for people who want to go deeper. Record live or upload audio (MP3,
        M4A, YouTube links). Get a full AI transcription. Then actually <em>study</em> it:
        ask questions, generate cross-references, build a study outline, create reflection
        prompts.
      </p>
      <p>What makes Berea different:</p>
      <ul>
        <li>
          <strong>Tagalog support</strong> — the first AI sermon notes app to serve
          Filipino congregations natively
        </li>
        <li>
          <strong>Built-in daily devotional</strong> — Morning and Evening by Charles
          Spurgeon, with daily readings
        </li>
        <li>
          <strong>Small group leader tools</strong> — generate discussion questions
          automatically
        </li>
        <li>
          <strong>Available in Portuguese</strong> — serving Brazil&apos;s fast-growing
          evangelical church
        </li>
      </ul>
      <p>
        Berea went live on the App Store in March 2026 and is already serving active paid
        users across four continents.
      </p>
      <p>
        <strong>Best for:</strong> Serious Bible students, pastors who <em>listen</em> to
        other preachers for their own formation, small group leaders, Filipino and Brazilian
        congregations.
        <br />
        <strong>Download:</strong>{" "}
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          App Store
        </a>
      </p>

      <h2>Bottom Line</h2>
      <p>The best AI sermon notes app is the one that fits your workflow:</p>
      <ul>
        <li>
          <strong>Just want to remember what you heard?</strong> Sermon Keeper or Sermon
          Scribe.
        </li>
        <li>
          <strong>Heavy iPad user?</strong> Spirit Notes.
        </li>
        <li>
          <strong>Pastor writing sermons?</strong> SermonSpark.
        </li>
        <li>
          <strong>Serious about study, serve a non-English congregation, or lead a small
          group?</strong>{" "}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            Berea
          </a>.
        </li>
      </ul>
      <p>
        The category is young. These apps are improving fast. But the question isn&apos;t which
        app is most polished — it&apos;s which one was built with your specific workflow in mind.
      </p>
      <hr />
      <p>
        <em>
          Berea is available free on the iOS App Store.{" "}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            Download here.
          </a>
        </em>
      </p>
    </article>
  );
}

function Post3Content() {
  return (
    <article className="prose-berea">
      <p>
        Every small group leader knows the feeling: Sunday&apos;s sermon was <em>the</em> one.
        The passage hit. The illustration landed. Your group needs to discuss this.
      </p>
      <p>
        So you scramble through the notes app on your phone, searching for the fragments you
        captured — a half-sentence here, a reference there — and try to reconstruct
        something useful for Wednesday night.
      </p>
      <p>It doesn&apos;t have to be this way.</p>
      <p>
        Here&apos;s how the most prepared small group leaders I know approach sermon
        note-taking — and the free tool that makes it effortless.
      </p>

      <h2>Why Sermon Notes Matter More for Leaders Than Attendees</h2>
      <p>
        For a regular churchgoer, sermon notes are personal. A verse to remember. An
        application to journal about. Private, simple, enough.
      </p>
      <p>
        For a small group leader, sermon notes are <em>raw material</em>. You&apos;re not just
        remembering — you&apos;re preparing to lead others into the same text, the same
        argument, the same application.
      </p>
      <p>That means you need more than fragments. You need:</p>
      <ul>
        <li>The main argument, clearly stated</li>
        <li>The key scripture references and how they were used</li>
        <li>The emotional and narrative arc of the message</li>
        <li>Discussion questions that trace back to the actual sermon</li>
        <li>Application points your group can work with</li>
      </ul>
      <p>
        Getting all of that from a phone note taken during the service? Nearly impossible.
      </p>

      <h2>The Old Way vs. the Better Way</h2>
      <p>
        <strong>The old way:</strong> Take notes during the sermon. Miss half of it. After
        church, try to reconstruct the outline from memory and fragments. Write your own
        discussion questions from scratch. Spend 45 minutes on prep that should take 10.
      </p>
      <p>
        <strong>The better way:</strong> Record the sermon. Let AI do the heavy lifting.
        Use your prep time for depth, not reconstruction.
      </p>
      <p>
        This isn&apos;t about being lazy. It&apos;s about using the right tool for the job so your
        mental energy goes toward <em>insight</em> rather than <em>transcription</em>.
      </p>

      <h2>How to Take Smarter Sermon Notes as a Small Group Leader</h2>

      <h3>1. Record, Don&apos;t Just Write</h3>
      <p>
        The most important shift you can make: start recording audio.
      </p>
      <p>
        Most churches don&apos;t have a problem with attentive members recording on their phones.
        (If yours does, check if they post the sermon online — you can work with that too.)
      </p>
      <p>Recording gives you a source of truth. You can always go back.</p>

      <h3>2. Let AI Generate the Transcript</h3>
      <p>
        Once you have audio, transcription is trivial with the right tool. Apps like{" "}
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          Berea
        </a>{" "}
        transcribe in real time while you record, or let you upload audio after the fact.
      </p>
      <p>
        A full transcript changes your prep workflow completely. Instead of notes that need
        decoding, you have the full sermon in text form — searchable, quotable,
        reference-able.
      </p>

      <h3>3. Pull the Outline Automatically</h3>
      <p>
        With a transcript, you can instantly generate a structured outline: main points,
        sub-points, key scriptures. Berea does this automatically.
      </p>
      <p>
        This gives you the skeleton of the sermon — the shape of the argument — which is
        exactly what you need to design a discussion that traces the same path.
      </p>

      <h3>4. Generate Discussion Questions from the Actual Sermon</h3>
      <p>Here&apos;s where the magic happens.</p>
      <p>
        Rather than writing questions from scratch (or borrowing generic ones from a
        curriculum), you can ask AI to generate discussion questions{" "}
        <em>grounded in this specific sermon</em>.
      </p>
      <p>Questions like:</p>
      <ul>
        <li>
          &ldquo;The pastor argued that obedience flows from delight, not duty. Where do you
          see that tension in your own life?&rdquo;
        </li>
        <li>
          &ldquo;He referenced Romans 8:15 twice. What was the point he was making, and do you
          agree?&rdquo;
        </li>
      </ul>
      <p>
        These questions come from the sermon. Your group will feel the difference.
      </p>

      <h3>5. Use the Chat to Prep Deeper</h3>
      <p>
        Before your group meets, ask the AI: &ldquo;What&apos;s the main theological claim?&rdquo; or
        &ldquo;What application did the pastor emphasize most?&rdquo;
      </p>
      <p>
        You&apos;re not offloading your thinking. You&apos;re using a tool to help you think{" "}
        <em>better</em>.
      </p>

      <h2>The Free App That Makes All of This Easy</h2>
      <p>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          Berea
        </a>{" "}
        is an iOS app built specifically for this kind of sermon study.
      </p>
      <p>Here&apos;s what small group leaders can do with it:</p>
      <ul>
        <li>
          <strong>Record live</strong> during the service (with real-time transcription)
        </li>
        <li>
          <strong>Upload audio</strong> from your church&apos;s online sermon library
        </li>
        <li>
          <strong>Auto-generate</strong> an outline, summary, key scriptures, and discussion
          questions
        </li>
        <li>
          <strong>Chat with the transcript</strong> to dig deeper into any part of the
          message
        </li>
        <li>
          <strong>Organize sermons</strong> into folders by series, book, or group season
        </li>
      </ul>
      <p>
        It&apos;s free to download and try. The transcription quality is strong across multiple
        languages — including Tagalog, which matters for the many Filipino congregations
        where small groups are central to church life.
      </p>

      <h2>A Simple Pre-Group Prep Routine</h2>
      <p>Here&apos;s what this looks like as a weekly workflow:</p>
      <p>
        <strong>Sunday (5 min):</strong> Record the sermon in Berea while you listen.
      </p>
      <p>
        <strong>Monday/Tuesday (10 min):</strong> Open the sermon. Review the auto-generated
        outline. Skim the AI-generated discussion questions. Pick or adapt 4–5 for your
        group. Done.
      </p>
      <p>
        <strong>Wednesday (group night):</strong> Show up with confidence. You understand
        the sermon better than anyone in the room, and you have questions that actually
        connect back to what the pastor said.
      </p>
      <p>That&apos;s it. Ten minutes of prep instead of forty-five.</p>

      <h2>The Bottom Line</h2>
      <p>
        You&apos;re already doing the hard work of leading a small group. The prep doesn&apos;t have
        to be the bottleneck.
      </p>
      <p>
        Record the sermon. Get the transcript. Let the AI do the reconstruction. Put your
        energy into the conversation that matters.
      </p>
      <p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-link"
        >
          Try Berea free →
        </a>
      </p>
      <hr />
      <p>
        <em>Berea is available on the App Store for iPhone. Free to download with premium features available.</em>
      </p>
    </article>
  );
}

function Post5Content() {
  return (
    <article className="prose-berea">
      <p>
        If you&apos;ve been searching for an AI sermon notes app, you&apos;ve probably come across both
        Berea and Sermon Scribe. They&apos;re both iOS apps. They both record and transcribe
        sermons. They both use AI to generate summaries and notes.
      </p>
      <p>
        So what&apos;s the difference? And which one is right for you?
      </p>
      <p>
        This is an honest comparison. Berea is the app we built, so take our perspective
        with that in mind — but we&apos;ll give Sermon Scribe full credit where it&apos;s earned.
      </p>

      <h2>The Short Answer</h2>
      <p>
        <strong>Choose Sermon Scribe if:</strong> You want a polished, proven app with a
        large user community, and your primary use case is personal devotional reflection
        after Sunday services.
      </p>
      <p>
        <strong>Choose Berea if:</strong> You want to <em>study</em> sermons, not just
        capture them — or if you preach, lead small groups, attend a multilingual church,
        or listen to sermons outside of Sunday morning.
      </p>

      <h2>Side-by-Side Comparison</h2>
      <div className="overflow-x-auto my-6">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Berea</th>
              <th>Sermon Scribe</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Live transcription</td><td>✅ Yes</td><td>✅ Yes</td></tr>
            <tr><td>Upload existing audio</td><td>✅ Yes</td><td>✅ Yes</td></tr>
            <tr><td>AI summary</td><td>✅ Yes</td><td>✅ Yes</td></tr>
            <tr><td>AI outline</td><td>✅ Yes</td><td>✅ Yes</td></tr>
            <tr><td>Discussion questions</td><td>✅ Yes</td><td>✅ Yes</td></tr>
            <tr><td>Chat with transcript</td><td>✅ Yes</td><td>✅ Yes</td></tr>
            <tr><td>Daily devotional</td><td>✅ Yes (Spurgeon)</td><td>✅ Yes</td></tr>
            <tr><td>Tagalog transcription</td><td>✅ Yes</td><td>❌ No</td></tr>
            <tr><td>App Store ratings</td><td>Early stage</td><td>1,175+ (4.8★)</td></tr>
            <tr><td>Price</td><td>Free + subscription</td><td>$9.99–$12.99/mo</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Where Sermon Scribe Wins</h2>
      <p>
        <strong>Track record and reviews.</strong> Sermon Scribe has over 1,175 App Store
        ratings at 4.8 stars. That&apos;s years of user feedback built into the product. If you
        want a proven, stable app with a community of users behind it, that matters.
      </p>
      <p>
        <strong>Polished onboarding.</strong> Sermon Scribe has clearly invested in user
        experience. The app flows intuitively from first launch.
      </p>
      <p>
        <strong>Existing user community.</strong> There are forums, YouTube walkthroughs,
        and social media groups built around Sermon Scribe. If you learn better with
        community support, that ecosystem exists.
      </p>

      <h2>Where Berea Wins</h2>
      <p>
        <strong>Sermon study depth.</strong> Berea is built for people who want to{" "}
        <em>understand</em> sermons, not just record them. The AI chat is grounded in the
        actual transcript — so when you ask &ldquo;what was the pastor&apos;s main argument?&rdquo; or
        &ldquo;what did he mean by that illustration?&rdquo;, you get an answer rooted in what was
        actually said. This is different from a generic AI assistant.
      </p>
      <p>
        <strong>Small group leader tools.</strong> Berea generates discussion questions,
        application points, and outlines specifically designed for group use. If you&apos;re
        leading a small group and want to build your prep from the actual sermon, Berea&apos;s
        workflow is faster and more focused.
      </p>
      <p>
        <strong>Multilingual transcription.</strong> This is Berea&apos;s most distinctive
        differentiator. If your church preaches in Tagalog, or you regularly listen to
        sermons in another language, Sermon Scribe doesn&apos;t support that. Berea does.
        Portuguese support is in development.
      </p>
      <p>
        <strong>The &ldquo;pastor as learner&rdquo; workflow.</strong> Most sermon apps are designed for
        listeners sitting in the pew. Berea is also designed for pastors who{" "}
        <em>listen to other preachers</em> — at conferences, online, in seminary contexts
        — to fuel their own study and preaching. The folder organization and study tools
        reflect that.
      </p>
      <p>
        <strong>Daily Spurgeon devotional.</strong> Berea includes Morning &amp; Evening by
        Charles Spurgeon in full, integrated into the daily devotional experience. It&apos;s not
        a bolt-on; it&apos;s part of the rhythm the app is built around.
      </p>
      <p>
        <strong>Price.</strong> Berea&apos;s free tier is generous, and the subscription is
        priced below Sermon Scribe.
      </p>

      <h2>Who Each App Is Built For</h2>
      <p>
        <strong>Sermon Scribe is built for:</strong>
      </p>
      <ul>
        <li>Regular Sunday churchgoers who want to remember and reflect on sermons</li>
        <li>People who value a proven, polished product with strong ratings</li>
        <li>
          Users who prefer a faith companion app (devotionals + notes + Bible chat in one
          place)
        </li>
      </ul>
      <p>
        <strong>Berea is built for:</strong>
      </p>
      <ul>
        <li>
          Pastors, associate pastors, and ministry leaders who study other people&apos;s
          sermons
        </li>
        <li>
          Small group leaders who need to turn Sunday&apos;s sermon into Wednesday&apos;s discussion
        </li>
        <li>
          Members of Filipino, Brazilian, or other multilingual/diaspora congregations
        </li>
        <li>Seminary students and serious theological learners</li>
        <li>Anyone who wants to <em>study</em> sermons, not just capture them</li>
      </ul>

      <h2>The Honest Bottom Line</h2>
      <p>
        Sermon Scribe is the safer bet if you want the established option. It&apos;s earned its
        reputation.
      </p>
      <p>
        Berea is the right bet if your workflow goes deeper — if you&apos;re in a multilingual
        church, if you lead a group, if you&apos;re a pastor who learns by listening, or if
        you&apos;ve ever wished you could <em>talk to</em> a sermon the way you&apos;d talk to a
        knowledgeable friend about it.
      </p>
      <p>
        We built Berea because we needed it and nothing else worked for us. The people
        it&apos;s designed for tend to feel that immediately.
      </p>
      <hr />
      <p>
        <strong>Try Berea free:</strong>{" "}
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          Download on the App Store →
        </a>
      </p>
      <hr />
      <p>
        <em>
          Have questions about how Berea compares? We read every review and reply to
          feedback. Find us at berea.app.
        </em>
      </p>
    </article>
  );
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-ai-sermon-notes-apps-2026",
    title: "The 5 Best AI Sermon Notes Apps in 2026 (Honest Comparison)",
    date: "2026-03-15",
    excerpt:
      "After reviewing every major option on the market, here's an honest breakdown of the best AI sermon notes apps in 2026 — and which workflow each one is actually built for.",
    readingTime: "6 min read",
    Content: Post1Content,
  },
  {
    slug: "sermon-notes-small-group-leader",
    title: "How to Take Smarter Sermon Notes as a Small Group Leader (+ Free App)",
    date: "2026-03-22",
    excerpt:
      "Small group leaders need more than fragments from Sunday's sermon. Here's a simple weekly workflow — and the free tool that turns 45 minutes of prep into 10.",
    readingTime: "5 min read",
    Content: Post3Content,
  },
  {
    slug: "berea-vs-sermon-scribe",
    title: "Berea vs. Sermon Scribe: Which AI Sermon Notes App Is Right for You?",
    date: "2026-03-29",
    excerpt:
      "Both apps record and transcribe sermons. Both use AI to generate notes. So what's the actual difference? An honest comparison from the people who built Berea.",
    readingTime: "5 min read",
    Content: Post5Content,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
