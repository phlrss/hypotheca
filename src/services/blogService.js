import React from 'react';
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8 } from '../images/blogs'

const SEPARATOR = 'mt-4'
const INDENT = 'ml-5'

export const blogs = [
  {
    number: 1,
    id: 'how-often-should-i-pay-my-mortgage-and-does-it-really-matter',
    title: 'How often should I pay my mortgage and does it really matter?',
    date: '2020-09-22',
    section: 'Mortgage',
    author: 'Anthony',
    email: 'info@lenderia.ca',
    image: blog1,
    snippet: `As part of purchasing a property, you may find yourself in a situation
    whereby you need to secure funding in order to finance the transaction.
    This funding is often referred to as obtaining...`,
    content: <>
      <p className={SEPARATOR}>
        As part of purchasing a property, you may find yourself in a situation
        whereby you need to secure funding in order to finance the transaction.
        This funding is often referred to as obtaining a mortgage. One of the boxes
        that need to be checked on the mortgage closing documents relates to the
        selection of the Payment Frequency. By default, the regularly scheduled
        payment may be tentatively set on a monthly basis.
      </p>
      <p className={SEPARATOR}>
        The applicable options for the regularly scheduled payment are the
        following: on a weekly basis, bi-weekly basis, semi-monthly basis, or
        monthly basis. In addition, there is the ability to choose an accelerated
        payment option within the weekly and bi-weekly payment options. Confused
        yet? Clearly, there are many options available, but is one option perhaps
        “better” than the rest? The answer is: it depends.
      </p>
      <p className={SEPARATOR}>
        Before we answer the preceding question, let us define each of the payment
        options, so that we are better informed as to what each payment option
        entails.
      </p>
      <p className={SEPARATOR}>
        <strong>Monthly payment option</strong>
              : 12 payments are made each year. The mortgage is paid once per month.
      </p>
      <p className={SEPARATOR}>
        <strong>Semi-monthly option</strong>
              : 24 payments are made each year. The mortgage is paid twice per month. The
              total amount paid each year amounts to the same as the monthly option.
      </p>
      <p className={SEPARATOR}>
        <strong>Bi-weekly option</strong>
              : 26 payments are made each year. The mortgage is paid once per two weeks.
              The total amount paid each year amounts to the same as the monthly option.
      </p>
      <p className={SEPARATOR}>
        <strong>Weekly option</strong>
              : 52 payments are made each year. The mortgage is paid once per week. The
              total amount paid each year amounts to the same as the monthly option.
      </p>
      <p className={SEPARATOR}>
        <strong>Accelerated bi-weekly option</strong>
              : 26 payments are made each year. The mortgage is paid once per two weeks.
              The total amount paid each year amounts to approximately one additional
              payment per year compared to the monthly option (without using up
              prepayment privilege space). The reason for this is because the accelerated
              option is calculated by taking the monthly payment option amount, dividing
              the amount by two and using the resulting value as the accelerated
              bi-weekly payment amount.
      </p>
      <p className={SEPARATOR}>
        <strong>Accelerated weekly option</strong>
              : 52 payments are made each year. The mortgage is paid once per week. The
              total amount paid each year amounts to approximately one additional payment
              per year compared to the monthly option (without using up prepayment
              privilege space). The reason for this is because the accelerated option is
              calculated by taking the monthly payment option amount, dividing the amount
              by four and using the resulting value as the accelerated weekly payment
              amount.
      </p>
      <p className={SEPARATOR}>
        To summarize, the monthly, semi-monthly, bi-weekly, and weekly options all
        amount to equivalent payments on a monthly basis. The accelerated options,
        however, result in slightly higher equivalent payments on a monthly basis,
        with the excess directly applied against principal. Therefore, the
        accelerated options allow homeowners to pay down their mortgages sooner and
        allow for savings on interest - all by checking a box on the mortgage
        closing documents.
      </p>
      <p className={SEPARATOR}>
        Coming back to the initial question, how often a homeowner should pay their
        mortgage depends on factors such as budget, employment payment frequency,
        and willingness to save on interest. Feel free to check out our intelligent
        mortgage calculator that recommends the optimal payment strategy while also
        comparing the different payment frequency options.
      </p>
    </>
  },
  {
    number: 2,
    id: 'working-from-home-you-may-be-eligible-for-a-home-related-tax-deduction',
    title: 'Working from home? You may be eligible for a home-related tax deduction',
    date: '2020-10-03',
    section: 'Tax',
    author: 'Anthony',
    email: 'info@lenderia.ca',
    image: blog2,
    snippet: `In the age of COVID-19, you may find yourself working from home. Due to
    this, certain expenses ordinarily paid as part of general living costs may
    be eligible as a tax deduction...`,
    content: <>
      <p className={SEPARATOR}>
        In the age of COVID-19, you may find yourself working from home. Due to
        this, certain expenses ordinarily paid as part of general living costs may
        be eligible as a tax deduction.
      </p>
      <p className={SEPARATOR}>
        Eligibility for work space expenses is met so long as one of the following
        two conditions are satisfied:
      </p>
      <ol className={`${SEPARATOR} ${INDENT}`}>
        <li>1. The work space is where you mainly do your work (defined as more than 50% of the time)</li>
        <li>2. The work space is only used to earn employment income, on a regular and continuous basis for meeting clients, customers, and others in the course of your employment duties.</li>
      </ol>
      <p className={SEPARATOR}>
        In addition, an employer must complete and sign <u>form T2200</u> for an
          employee to deduct employment expenses from their income. Note that
          employees do not have to file the T2200 form along with their tax return,
          but must keep it in case the CRA asks for it.
      </p>
      <p className={SEPARATOR}>
        Once eligibility is met, you can deduct part of the costs that relate to
        your work space denoted below:
      </p>
      <ul style={{ listStyle: 'inside' }} className={`${SEPARATOR} ${INDENT}`}>
        <li>Electricity &amp; fuel costs</li>
        <li>Maintenance &amp; repairs</li>
        <li>Cleaning fees</li>
        <li>Rent</li>
        <li>Insurance and property taxes*</li>
        <li>Phone costs (landline and cell)**</li>
        <li>Internet costs**</li>
      </ul>
      <p className={SEPARATOR}>
        *Only permitted for commissioned salespersons
      </p>
      <p className={SEPARATOR}>
        **Costs do not need to be pro-rated based on the area of the work space
      </p>
      <p className={SEPARATOR}>
        To calculate the percentage of costs eligible for a tax deduction, measure
        the area of the work space and divide it by the total finished living area
        space in your home.
      </p>
      <p className={SEPARATOR}>
        Note that the expenses are eligible for a tax deduction to the extent you
        have not been reimbursed for such expenses from your employer.
      </p>
      <p className={SEPARATOR}>
        Given this, it is important to be organized and maintain adequate records
        for each expense as well as support for the calculation of the work space
        and total finished living area space in your home. More importantly, be
        sure to ask and obtain a signed T2200 form from your employer at the end of
        the fiscal year. By doing so, taking advantage of this home-related tax
        deduction makes working from home that much better.
      </p>
    </>
  },
  {
    number: 3,
    id: 'principal-residence-exemption-country-cottage-considerations',
    title: 'Principal residence exemption – Country cottage considerations',
    date: '2020-10-09',
    section: 'Tax',
    author: 'Anthony',
    email: 'info@lenderia.ca',
    image: blog3,
    snippet: `For homeowners, the principal residence exemption is an income tax benefit
    that generally provides an exemption from tax on the capital gain realized
    when selling a property that is designated as the “principal residence”...`,
    content: <>
      <p className={SEPARATOR}>
        For homeowners, the principal residence exemption is an income tax benefit
        that generally provides an exemption from tax on the capital gain realized
        when selling a property that is designated as the “principal residence”.
      </p>
      <p className={SEPARATOR}>
        The CRA defines a principal residence as a housing unit owned by a person
          and <u>ordinarily inhabited</u> in the year by the person, spouse, or
          child.
      </p>
      <p className={SEPARATOR}>
        For any given year, a homeowner can only designate one house as a principal
        residence. Due to this, an interesting question arises for homeowners who
        own a country cottage, that being; which property should be designated as
        the principal residence if both homes could be considered “ordinarily
        inhabited”?
      </p>
      <p className={SEPARATOR}>
        The answer requires a bit of math.
      </p>
      <p className={SEPARATOR}>
        One might be tempted to designate the home with the larger accrued gain as
        the principal residence, however, an important factor at play is the number
        of years owned. Taking the accrued gain as a function of the number of
        years of ownership will result in a calculated “gain per year” for each
        property, with the higher of the two being the property that should be
        designated as the principal residence.
      </p>
    </>
  },
  {
    number: 4,
    id: 'did-you-move-during-the-year-you-may-be-eligible-for-a-tax-deduction',
    title: 'Did you move during the year? You may be eligible for a tax deduction',
    date: '2020-10-14',
    section: 'Tax',
    author: 'Anthony',
    email: 'info@lenderia.ca',
    image: blog4,
    snippet: `Moving from one location to another can be a stressful and perhaps
    exhausting experience. One potential benefit that can come out of it is the
    opportunity to use the moving costs as a tax deduction...`,
    content: <>
      <p className={SEPARATOR}>
        Moving from one location to another can be a stressful and perhaps
        exhausting experience. One potential benefit that can come out of it is the
        opportunity to use the moving costs as a tax deduction.
            </p>
      <p className={SEPARATOR}>
        This benefit is available to three types of individuals:
            </p>
      <p className={`${SEPARATOR} ${INDENT}`}>
        · An individual who moved to work in a new location or to run a business in
        a new location
            </p>
      <p className={INDENT}>
        · A student who moved to attend a post-secondary educational institution,
        in or out of Canada, on a full-time basis
            </p>
      <p className={INDENT}>
        · A student who moved to work in a new location
            </p>
      <p className={SEPARATOR}>
        Eligibility for moving expenses as a tax deduction is met so long as the
        following condition is satisfied:
            </p>
      <p className={`${SEPARATOR} ${INDENT}`}>
        · The new home is at least 40 kilometers closer to the new work or school
        location as compared to the old home
            </p>
      <p className={SEPARATOR}>
        To clarify, the two distances that need to be compared are the following:
            </p>
      <p className={`${SEPARATOR} ${INDENT}`}>
        · A – The distance from the old home to the new work or school location
            </p>
      <p className={INDENT}>
        · B – The distance from the new home to the new work or school location
            </p>
      <p className={SEPARATOR}>
        The difference between A and B needs to be at least 40 kilometers for
        eligibility to be met.
            </p>
      <p className={SEPARATOR}>
        Once eligibility is met, you can deduct the following moving expenses:
            </p>
      <p className={`${SEPARATOR} ${INDENT}`}>
        · Transportation and storage costs
            </p>
      <p className={INDENT}>
        · Travel expenses (including vehicle expenses, meal costs, and
        accommodation costs)
            </p>
      <p className={INDENT}>
        · Temporary living expenses (up to a maximum of 15 days for meals and
        temporary lodging costs incurred near old and/or new home)
            </p>
      <p className={INDENT}>
        · Costs of cancelling a lease
            </p>
      <p className={INDENT}>
        · Incidental costs
            </p>
      <p className={INDENT}>
        · Cost of selling old home (including advertising, notary/legal fees, real
        estate commission, and mortgage penalty fees)
            </p>
      <p className={INDENT}>
        · Cost of buying new home (including notary/legal fees, land transfer tax)
            </p>
      <p className={INDENT}>
        · Costs to maintain old home when vacant (up to a maximum of $5,000 – which
        include interest, property taxes, insurance premiums, and cost of heating
        &amp; utilities)
            </p>
      <p className={SEPARATOR}>
        Note that the eligible moving expenses can only be used as a tax deduction
        against income from the new location, net business income, or from the
        research grant income from the post-secondary educational institution.
        However, the amounts can be carried forward to future periods with no
        carryover limit. Further, the expenses are eligible for a tax deduction to
        the extent you have not been reimbursed for such expenses.
            </p>
    </>
  },
  {
    number: 5,
    id: 'how-should-i-go-about-shopping-for-the-best-mortgage',
    title: 'How should I go about shopping for the “best” mortgage?',
    date: '2020-10-25',
    section: 'Mortgage',
    author: 'Anthony',
    email: 'info@lenderia.ca',
    image: blog5,
    snippet: `Not all mortgages are made equally. Additionally, not all mortgage lenders
    offer the same products. Taking it one step further, not all mortgage
    brokers have access to the same lenders and promotional offers...`,
    content: <>
      <p className={SEPARATOR}>
        Not all mortgages are made equally. Additionally, not all mortgage lenders
        offer the same products. Taking it one step further, not all mortgage
        brokers have access to the same lenders and promotional offers. Due to
        this, shopping for the “best” mortgage can become quite a difficult task.
      </p>
      <p className={SEPARATOR}>
        Before we delve into the details, let us take a step back and pose the
        question: what does the “best” mortgage entail? Is it the lowest interest
        rate? Is it the one with the lowest penalties? Perhaps it’s the one with
        portability features? The answer is (of course): it depends on your own
        personal situation and your own personal needs.
      </p>
      <p className={SEPARATOR}>
        In our quest to find the “best” mortgage, we will define the different type
        of mortgage lenders in Canada, then define the different type of mortgage
        categories (and breakout the different mortgage products), and finally, we
        will indicate the different mortgage advisors in Canada.
      </p>
      <p className={SEPARATOR}>
        Let us first define the different type of mortgage lenders in Canada.
      </p>
      <p className={SEPARATOR}>
        Mortgage lenders in Canada can be broken down into the following three
        categories:
      </p>
      <ol style={{ listStyle: 'inside decimal' }} className={`${SEPARATOR} ${INDENT}`}>
        <li>
          “A” lenders (major banks, credit unions, and monoline lenders)
        </li>
        <li>
          “B” lenders (otherwise known as alternative lenders)
        </li>
        <li>
          Private lenders (otherwise known as unregulated lenders)
        </li>
      </ol>
      <p className={SEPARATOR}>
        “A” lenders are highly regulated and are able to offer the lowest interest
        rates, have lower penalties, and offer better terms to clients that
        qualify. Moving down the scale to “B” and Private lenders, shoppers will
        find themselves in a less regulated territory whereby the lenders charge
        higher interest rates and higher penalty fees. The general recommendation
        is to obtain a mortgage with an “A” lender whenever possible.
      </p>
      <p className={SEPARATOR}>
        Now that we have defined the different mortgage lenders in Canada, let us
        define the different type of mortgages offered in Canada.
      </p>
      <p className={SEPARATOR}>
        Mortgages can be broken down into three categories:
      </p>
      <ol style={{ listStyle: 'inside upper-alpha' }} className={`${SEPARATOR} ${INDENT}`}>
        <li>
          Institutional mortgages (broken down into 9 mortgage products/features)
        </li>
        <li>
          Alternative mortgages (broken down into 1 mortgage product)
        </li>
        <li>
          Private mortgages (broken down into 2 mortgage products)
        </li>
      </ol>
      <p className={SEPARATOR}>
        <strong>A. Institutional mortgages</strong>
      </p>
      <p className={SEPARATOR}>
        A-1. Conventional mortgage
      </p>
      <p className={SEPARATOR}>
        A conventional mortgage is one whereby the borrower puts a minimum of 20%
        as a down payment. As a result of putting a minimum of 20% as a down
        payment, mortgage default insurance is not required.
      </p>
      <p className={SEPARATOR}>
        A-2. High ratio mortgage
      </p>
      <p className={SEPARATOR}>
        A high ratio mortgage is one whereby the borrower puts less than 20% as a
        down payment. Due to this, mortgage default insurance is required. Note:
        Mortgage default insurance protects the lender in the event that the buyer
        defaults on the mortgage.
      </p>
      <p className={SEPARATOR}>
        A-3. Open/closed mortgage
      </p>
      <p className={SEPARATOR}>
        An open mortgage is one whereby the borrower can pay off the mortgage in
        full at any time without facing a penalty whereas a closed mortgage
        restricts the amount that can be paid back at any given time. Note: open
        mortgages typically ha
      </p>
      <p className={SEPARATOR}>
        A-4. Fixed rate mortgage
      </p>
      <p className={SEPARATOR}>
        A fixed rate mortgage is one whereby the mortgage rate remains the same
        during the mortgage term (terms offered generally include 1-yr, 3-yr, 5-yr,
        etc.).
      </p>
      <p className={SEPARATOR}>
        A-5. Variable rate mortgage
      </p>
      <p className={SEPARATOR}>
        A variable rate mortgage is one whereby the mortgage rate may vary during
        the mortgage term. The rate varies as a function of a change in the
        lender’s “prime rate” (which correspondingly varies as a function of the
        Bank of Canada’s overnight lending rate).
      </p>
      <p className={SEPARATOR}>
        A-6. Portable mortgage
      </p>
      <p className={SEPARATOR}>
        A portable mortgage is one whereby the mortgage can be transferred from one
        property to another property without having to face a penalty or without
        having to requalify for the mortgage to the new property.
      </p>
      <p className={SEPARATOR}>
        A-7. Home equity line of credit (HELOC)
      </p>
      <p className={SEPARATOR}>
        A HELOC allows the borrower to draw up to 65 percent of the value of the
        property, to be used as the borrower sees fit.
      </p>
      <p className={SEPARATOR}>
        A-8. Cash back mortgage
      </p>
      <p className={SEPARATOR}>
        A cash back mortgage is one whereby funds are received upfront, and which
        the funds can be used towards uses (other than for the down-payment).
      </p>
      <p className={SEPARATOR}>
        A-9. Renovation loan
      </p>
      <p className={SEPARATOR}>
        A renovation loan is one whereby funds are borrowed and used to renovate a
        property.
      </p>
      <p className={SEPARATOR}>
        <strong>B. Alternative mortgages</strong>
      </p>
      <p className={SEPARATOR}>
        B-1. Reverse mortgage
      </p>
      <p className={SEPARATOR}>
        A reverse mortgage is one whereby a homeowner (aged 55 or older) can borrow
        against the equity of their home, choosing to receive it on a monthly basis
        or as a lump sum.
      </p>
      <p className={SEPARATOR}>
        <strong>C. Private mortgages</strong>
      </p>
      <p className={SEPARATOR}>
        C-1. Bridge mortgage
      </p>
      <p className={SEPARATOR}>
        A bridge mortgage is one whereby a temporary loan is provided during the
        interim period between selling one home and buying another home.
      </p>
      <p className={SEPARATOR}>
        C-2. Second mortgage
      </p>
      <p className={SEPARATOR}>
        A second mortgage is one whereby a property is secured by two different
        mortgage products.
      </p>
      <p className={SEPARATOR}>
        Now that we have defined the different mortgage products offered, it is
        important to know who to contact in order to obtain the “best” mortgage
        product.
      </p>
      <p className={SEPARATOR}>
        Mortgage advisors can be split among the following:
      </p>
      <ol style={{ listStyle: 'inside decimal' }} className={`${SEPARATOR} ${INDENT}`}>
        <li>
          Mortgage specialists – employed by a lending institution that only have
          access and sell that particular lending institution’s mortgage products.
        </li>
        <li>
          Mortgage brokers – employed by independent brokerage firms that have
          access to multiple lenders’ products.
        </li>
      </ol>
      <p className={SEPARATOR}>
        It is generally recommended to shop with a few mortgage specialists and
        mortgage brokers as not all mortgage brokers have access to the same
        lenders and promotional offers.
      </p>
      <p className={SEPARATOR}>
        Now that you understand the different mortgage lenders, different mortgage
        categories, different mortgage products, and different mortgage advisors,
        you will be that much better informed in obtaining the “best” mortgage that
        fits your specific needs
      </p>
    </>
  },
  {
    number: 6,
    id: 'what-is-the-difference-between-the-home-buyers-amount-the-home-buyers-plan-and-the-first-time-home-buyer-incentive-program',
    title: 'What is the difference between the Home Buyer’s Amount (HBA), the Home Buyers’ Plan (HBP), and the First-Time Home Buyer Incentive program?',
    date: '2020-10-30',
    section: 'Mortgage',
    author: 'Anthony',
    email: 'info@lenderia.ca',
    image: blog6,
    snippet: `In Canada, the Government wants to incentivize individuals to buy homes.
    One way of doing so is to provide Canadians with a non-refundable tax
    credit in the form of the Home Buyer’s Amount (HBA), another way...`,
    content: <>
      <p className={SEPARATOR}>
        In Canada, the Government wants to incentivize individuals to buy homes.
        One way of doing so is to provide Canadians with a non-refundable tax
        credit in the form of the Home Buyer’s Amount (HBA), another way of doing
        so is through the Home Buyer’s Plan (HBP), and a third way of doing so is
        through the First-Time Home Buyer Incentive program. Although all three
        have the words “Home” and “Buyer” in them, they are entirely mutually
        exclusive and distinct from one another.
      </p>
      <p className={SEPARATOR}>
        <strong>What is the Home Buyer’s Amount (HBA)?</strong>
      </p>
      <p className={SEPARATOR}>
        The Home Buyer’s Amount is a non-refundable tax credit that provides a
        first-time homeowner the ability to claim $5,000 for the purchase of a
        home. Note that the CRA defines a “first-time homeowner” as an individual
        who has not owned a home in the previous 4 years.
      </p>
      <p className={SEPARATOR}>
        Qualifying homes must be in Canada and can be single-family homes,
        semi-detached, townhouses, mobile homes, condo, apartments/plexes and must
        be occupied as the principal place of residence no later than one year
        after it is acquired.
      </p>
      <p className={SEPARATOR}>
        Eligible homeowners can claim the Home Buyer’s Amount when filing their
        personal income tax returns. Note that as the tax credit is non-refundable,
        it provides individuals with savings of $750 (15% x $5,000) applied against
        taxes payable to the extent that there is tax to pay.
      </p>
      <p className={SEPARATOR}>
        Note: Persons with disabilities do not have to be a first-time home buyer
        to be eligible for this non-refundable tax credit.
      </p>
      <p className={SEPARATOR}>
        <strong>What is the Home Buyer’s Plan (HBP)?</strong>
      </p>
      <p className={SEPARATOR}>
        The Home Buyer’s Plan allows first-time homeowners to withdraw up to
        $35,000 from their Registered Retirement Savings Plans (RRSPs) to be used
        as part of purchasing a qualifying home without requiring the amount to be
        declared as income.
      </p>
      <p className={SEPARATOR}>
        In return for drawing from their RRSPs without a penalty, eligible
        homeowners must repay the amounts back into the RRSP over the next 16 years
        after withdrawal. Otherwise, the individual is taxed on the amounts not
        repaid.
      </p>
      <p className={SEPARATOR}>
        Note that the definition of a “first-time homeowner” and “qualifying home”
        are consistent with the definition noted above.
      </p>
      <p className={SEPARATOR}>
        <strong>What is the First-Time Home Buyer Incentive program?</strong>
      </p>
      <p className={SEPARATOR}>
        The First-Time Home Buyer Incentive program is an initiative that allows
        first-time homeowners to finance a portion of their home through a “shared
        equity” mortgage with the Government of Canada.
      </p>
      <p className={SEPARATOR}>
        The intent of the program is to enable first-time homeowners to reduce
        their monthly mortgage payments, without increasing the amount that needs
        to be saved for a down payment.
      </p>
      <p className={SEPARATOR}>
        In addition to being a first-time homeowner, In order to be eligible for
        the program, the following conditions need to be met:
      </p>
      <ul style={{ listStyle: 'inside decimal' }} className={`${SEPARATOR} ${INDENT}`}>
        <li>
          Total annual qualifying income cannot be greater than $120,000
        </li>
        <li>
          Total borrowing cannot exceed 4 times total annual qualifying income
        </li>
      </ul>
      <p className={SEPARATOR}>
        One of the benefits of the program is that the incentive is non-interesting
        bearing, and the homeowner can repay the incentive at any time within 25
        years without incurring any pre-payment penalty (Note that the incentive
        must be repaid if the property is sold).
      </p>
      <p className={SEPARATOR}>
        The fact that the mortgage is one of a “shared-equity” variation infers
        that the Government of Canada shares in the upside and in the downside of
        the property value. This means that the repayment amount varies as the
        property value also varies (repayment amount is calculated by taking the
        percentage of the value borrowed multiplied by the value of the home).
      </p>
      <p className={SEPARATOR}>
        Note that the definition of a “first-time homeowner” and “qualifying home”
        are consistent with the definition noted above.
      </p>
      <p className={SEPARATOR}>
        With the above, knowing the applicable incentives and programs available to
        individuals is essential in understanding and taking advantage of offers
        that best reflect the needs of each new homeowner.
      </p>
    </>
  },
  {
    number: 7,
    id: 'mortgage-deferral-is-it-right-for-me',
    title: 'Mortgage deferral – is it right for me?',
    date: '2020-11-01',
    section: 'Mortgage',
    author: 'Anthony',
    email: 'info@lenderia.ca',
    image: blog7,
    snippet: `In times of financial hardship, lending institutions may provide forbearance / 
    mortgage deferral programs to homeowners. Although certain financial institutions frame 
    the initiatives as “relief programs”, there are costs associated that need to be understood...`,
    content: <>
      <p className={SEPARATOR}>
        In times of financial hardship, lending institutions may provide
        forbearance / mortgage deferral programs to homeowners. Although certain
        financial institutions frame the initiatives as “relief programs”, there
        are costs associated that need to be understood.
      </p>
      <p className={SEPARATOR}>
        First, let us delve into the details of what the mortgage deferral program
        entails so that we understand the characteristics. By understanding the
        forbearance terms, we will be better informed as whether the program is
        worthwhile pursuing.
      </p>
      <p className={SEPARATOR}>
        What is a mortgage deferral?
      </p>
      <p className={SEPARATOR}>
        A mortgage deferral is the ability to delay mortgage payments (both
        principal and interest) for a certain period of time, typically, for up to
        six months. The deferral is agreed upon on a case-by-case basis with the
        lending institution.
      </p>
      <p className={SEPARATOR}>
        What happens to the interest on the mortgage?
      </p>
      <p className={SEPARATOR}>
        All while the mortgage is being deferred (and no payments are being made),
        interest will continue to accrue and will be added to the outstanding
        balance when the mortgage deferral period ends.
      </p>
      <p className={SEPARATOR}>
        How will the additional accrued interest be repaid?
      </p>
      <p className={SEPARATOR}>
        Depending on the specific terms agreed upon with the lending institution,
        the resumption of the mortgage payments can take any of the following three
        forms:
      </p>
      <ol style={{ listStyle: 'inside decimal' }} className={`${SEPARATOR} ${INDENT}`}>
        <li>
          Resumption of regular payments be slightly higher to layer in the
          accrued interest and principal that was deferred.
        </li>
        <li>
          The amortization period is extended – Instead of the amortization term
          being 25 years and 0 months, the amortization term is now 25 years and 6
          months.
        </li>
        <li>
          The deferred payments are added at the end of the mortgage term
        </li>
      </ol>
      <p className={SEPARATOR}>
        Note: some financial institutions may layer in the additional accrued
        interest and blend it in as part of a revised “principal” balance. By doing
        so, the lending institution is effectively charging interest on interest.
        It is recommended to verify the forbearance agreement and clarify this
        aspect with the lending institution. If this is the case, it is advised
        that homeowners request a refund.
      </p>
      <p className={SEPARATOR}>
        Using an example, let us calculate what the impact of a six-month deferral
        will be on the following mortgage:
      </p>
      <ul style={{ listStyle: 'inside' }} className={`${SEPARATOR} ${INDENT}`}>
        <li>
          Mortgage = $400,000
        </li>
        <li>
          Interest rate = 2.50%
        </li>
        <li>
          Amortization term = 25 years
        </li>
        <li>
          Payment frequency = Monthly
        </li>
        <li>
          Total interest over amort. term (no deferral) = $137,559
        </li>
        <li>
          Total interest over amort. Term (six-month deferral*) = $142,534
        </li>
        <li>
          Implicit cost of six-month deferral = <strong>$4,974</strong>
        </li>
      </ul>
      <p className={SEPARATOR}>
        *At beginning of term
      </p>
      <p className={SEPARATOR}>
        Ultimately, what it comes down to is whether the benefits of immediate cash
        flow needs outweigh the drawbacks of the additional accrued interest to be
        repaid. Further, if you find yourself in a position of financial hardship,
        it is important to first rank the hierarchy of debt, both in terms of value
        and interest percentage, prior to deciding which to service first.
      </p>
    </>
  },
  {
    number: 8,
    id: 'cra-expands-guidance-on-covid-19-employee-related-benefits',
    title: 'CRA expands guidance on COVID-19 employee-related benefits',
    date: '2020-11-06',
    section: 'Tax, Homeownership',
    author: 'Anthony',
    email: 'info@lenderia.ca',
    image: blog8,
    snippet: `Due to COVID-19, the Canada Revenue Agency made some slight changes to how
    certain employee expenses are treated from a tax perspective. The changes
    are noted as follows...`,
    content: <>
      <p className={SEPARATOR}>
        Due to COVID-19, the Canada Revenue Agency made some slight changes to how
        certain employee expenses are treated from a tax perspective. The changes
        are noted as follows:
      </p>
      <p className={SEPARATOR}>
        <strong>Parking costs</strong>
      </p>
      <p className={SEPARATOR}>
        In normal circumstances:
      </p>
      <p className={SEPARATOR}>
        Employer-provided parking, if provided gratuitously, is a taxable benefit
        to the employee.
      </p>
      <p className={SEPARATOR}>
        During COVID-19:
      </p>
      <p className={SEPARATOR}>
        Employer-provided parking will not be considered a taxable benefit to the
        employee where the regular place of employment is closed during the
        COVID-19 pandemic.
      </p>
      <p className={SEPARATOR}>
        <strong>Commuting costs</strong>
      </p>
      <p className={SEPARATOR}>
        In normal circumstances:
      </p>
      <p className={SEPARATOR}>
        Car allowances not based on kilometers driven is a taxable benefit to the
        employee.
      </p>
      <p className={SEPARATOR}>
        During COVID-19:
      </p>
      <p className={SEPARATOR}>
        Where an employee is reimbursed or receives a reasonable allowance for
        travel expenses associated with travelling from home to their regular place
        of employment during the pandemic, the amounts will not be considered as a
        taxable benefit to the employee.
      </p>
      <p className={SEPARATOR}>
        <strong>Home office equipment</strong>
      </p>
      <p className={SEPARATOR}>
        In normal circumstances:
      </p>
      <p className={SEPARATOR}>
        A reimbursement or allowance for personal computer equipment is a taxable
        benefit to the employee.
      </p>
      <p className={SEPARATOR}>
        During COVID-19:
      </p>
      <p className={SEPARATOR}>
        A reimbursement or allowance of up to $500 for home office equipment
        (including computer equipment, desks, chairs, etc.) will not be considered
        a taxable benefit for the employee, however any amount above the threshold
        is treated as a taxable benefit.
      </p>
    </>
  }
]