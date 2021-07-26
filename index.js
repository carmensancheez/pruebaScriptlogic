const constants = require('./constants');

( function () {

      const resultClaimDetailCollection = constants.CLAIMDETAIL.filter(o1 => constants.CLAIMDETAILSCRIPT.some(o2 =>
        o1.auth_id === o2.auth_id &&
        // o1.status === o2.status &&
        // o1.patient_address === o2.patient_address &&
        // o1.prescriber_telephone === o2.prescriber_telephone &&
        // o1.prescriber_address === o2.prescriber_address &&
        // o1.formula === o2.formula &&
        // o1.rating_reference_fee === o2.rating_reference_fee &&
        // o1.file_dt === o2.file_dt && // removerr
        // o1.location === o2.location &&
        // o1.cost_basis === o2.cost_basis &&
        // o1.client_address === o2.client_address &&
        // o1.adjuster_id === o2.adjuster_id &&
        // o1.fee_schedule_formula === o2.fee_schedule_formula &&
        // o1.rating_reference_formula === o2.rating_reference_formula &&
        // o1.due_amount === o2.due_amount &&
        // o1.saving === o2.saving &&
        // o1.fee_schedule === o2.fee_schedule &&
        o1.adjuster === o2.adjuster &&
        o1.group_id === o2.group_id &&
        o1.group_name === o2.group_name &&
        o1.claim_number === o2.claim_number &&
        o1.ssno === o2.ssno &&
        o1.client_id === o2.client_id &&
        o1.client_name === o2.client_name &&
        o1.client_telephone === o2.client_telephone &&
        o1.rev_auth === o2.rev_auth &&
        o1.brand_gen === o2.brand_gen &&
        o1.daw === o2.daw &&
        o1.days_supply === o2.days_supply &&
        o1.dea === o2.dea &&
        o1.drug_name === o2.drug_name &&
        o1.rx_no === o2.rx_no &&
        o1.awp === o2.awp &&
        o1.pharmacy === o2.pharmacy &&
        o1.pharmacy_id === o2.pharmacy_id &&
        o1.pharmacy_npi === o2.pharmacy_npi &&
        o1.pharmacy_address === o2.pharmacy_address &&
        o1.pharmacy_telephone === o2.pharmacy_telephone &&
        o1.claim_state === o2.claim_state &&
        o1.prescriber_state === o2.prescriber_state &&
        o1.first_name === o2.first_name &&
        o1.last_name === o2.last_name &&
        o1.ndc === o2.ndc &&
        o1.person_code === o2.person_code &&
        o1.doctor_no === o2.doctor_no &&
        o1.prescriber_name === o2.prescriber_name &&
        o1.member_paid === o2.member_paid &&
        o1.plan_paid === o2.plan_paid &&
        o1.manual_claim === o2.manual_claim &&
        o1.u_and_c === o2.u_and_c &&
        o1.retail === o2.retail &&
        o1.quantity === o2.quantity &&
        o1.subscriber_num === o2.subscriber_num
        // o1.claim_id === o2.claim_id &&
      ));
      console.log(resultClaimDetailCollection)

    const resultClaimCollection = constants.CLAIM.filter(o1 => constants.CLAIMSCRIPT.some(o2 =>
      o1.auth_id === o2.auth_id &&
      // o1.group_id === o2.group_id &&
      // o1.location === o2.location &&
      // o1.previous_card_id === o2.previous_card_id &&
      // o1.status === o2.status &&
      // o1.rated === o2.rated &&
      // o1.client_validation === o2.client_validation &&
      // o1.rating_reference_validation === o2.rating_reference_validation
      o1.subscriber_num === o2.subscriber_num &&
      o1.person_code === o2.person_code &&
      o1.last_name === o2.last_name &&
      o1.first_name === o2.first_name &&
      o1.gender === o2.gender &&
      o1.prior_auth_submitted === o2.prior_auth_submitted &&
      o1.member_prior_auth === o2.member_prior_auth &&
      o1.doctor_no === o2.doctor_no &&
      o1.dea === o2.dea &&
      o1.prescriber_name === o2.prescriber_name &&
      o1.pharmacy_id === o2.pharmacy_id &&
      o1.pharmacy === o2.pharmacy &&
      o1.retail === o2.retail &&
      o1.ndc === o2.ndc &&
      o1.drug === o2.drug &&
      o1.brand_gen === o2.brand_gen &&
      o1.mony === o2.mony &&
      o1.gpi === o2.gpi &&
      o1.thera_class === o2.thera_class &&
      o1.fourmulary_ind === o2.fourmulary_ind &&
      o1.maintenance_ind === o2.maintenance_ind &&
      o1.rx_otc_indicator === o2.rx_otc_indicator &&
      o1.rx_no === o2.rx_no &&
      o1.days_supply === o2.days_supply &&
      o1.quantity === o2.quantity &&
      o1.rev_auth === o2.rev_auth &&
      o1.plan_paid === o2.plan_paid &&
      o1.member_paid === o2.member_paid &&
      o1.compound_code === o2.compound_code &&
      o1.comp_key === o2.comp_key &&
      o1.number_refills === o2.number_refills &&
      o1.daw === o2.daw &&
      o1.awp === o2.awp &&
      o1.ingredient_cost === o2.ingredient_cost &&
      o1.disp_fee === o2.disp_fee &&
      o1.mark_up === o2.mark_up &&
      o1.deductible === o2.deductible &&
      o1.max_benefit === o2.max_benefit &&
      o1.max_oop === o2.max_oop &&
      o1.tax === o2.tax &&
      o1.u_and_c === o2.u_and_c &&
      o1.cost_basis === o2.cost_basis &&
      o1.str1_20 === o2.str1_20 &&
      o1.str2_20 === o2.str2_20 &&
      o1.prescriber_state === o2.prescriber_state &&
      o1.manual_claim === o2.manual_claim &&
      o1.pharmacy_npi === o2.pharmacy_npi
    ));

    // console.log(resultClaimCollection)
}
)();